import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import User from '../models/User';
import File from '../models/File';
import Appointment from '../models/Appointment';
import Notification from '../schemas/Notification';

class AppoitmentController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, cancelled_at: null },
            order: ['date'],
            attributes: ['id', 'date'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: File,
                            as: 'avatar',
                            attributes: ['id', 'path', 'url'],
                        },
                    ],
                },
            ],
        });

        return res.json(appointments);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            provider_id: Yup.number().required(),
            date: Yup.date().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { provider_id, date } = req.body;

        const isProvider = await User.findOne({
            where: { id: provider_id, provider: true },
        });

        if (!isProvider) {
            return res.status(401).json({ error: 'You should be a provider to create appointments' });
        }

        const hourStart = startOfHour(parseISO(date));

        if (isBefore(hourStart, new Date())) {
            return res.status(400).json({ error: 'Past dates are not permited' });
        }

        const checkAvailability = await Appointment.findOne({
            where: {
                provider_id,
                cancelled_at: null,
                date,
            },
        });

        if (checkAvailability) {
            return res.status(400).json({ error: 'Already have one appointment with this date' });
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            provider_id,
            date,
        });

        const user = User.findByPk(req.userId);
        const formattedDate = format(date, "'dia' dd 'de' MMMM', as' H:mm'h'", {
            locale: pt,
        });

        await Notification.create({
            content: `Novo agendamendo de ${user.name} para dia ${formattedDate}`,
            user: provider_id,
        });

        return res.json(appointment);
    }
}

export default new AppoitmentController();

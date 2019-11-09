import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
    async index(req, res) {
        const checkUserProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!checkUserProvider) {
            return res.status(401).json({ error: 'You must be a provider to access scheduels' });
        }

        const { date } = req.query;
        const parsedDate = parseISO(date);

        const appointments = await Appointment.findAll({
            where: {
                provider_id: req.userId,
                cancelled_at: null,
                date: {
                    // adendo: valor esta entre chaves pois é uma variavel sendo usada como nome de propriedade
                    [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
                },
            },
            order: ['date'],
        });

        return res.json(appointments);
    }
}

export default new ScheduleController();

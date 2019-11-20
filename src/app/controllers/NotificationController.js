import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
    /**
     * Return all notifications from MongoDB
     * @param {*} req request
     * @param {*} res response
     * @returns {JSON} Notification list
     */
    async index(req, res) {
        const isProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!isProvider) {
            return res.status(401).json({ error: 'You should be a provider access notifications!' });
        }

        const notifications = await Notification.find({
            user: req.userId,
        })
            .sort({ createdAt: 'desc' })
            .limit(20);

        return res.json(notifications);
    }

    /**
     * Update notification object in MongoDB
     * @param {*} req request
     * @param {*} res response
     * @returns {JSON} JSON
     */
    async update(req, res) {
        // propriedade new serve para que o mongoose volte a instancia do objeto atualizado
        const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });

        return res.json(notification);
    }
}

export default new NotificationController();

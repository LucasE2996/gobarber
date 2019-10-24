// import Appoitment from '../models/Appointment';

class AppoitmentController {
    async store(req, res) {
        return res.json({ ok: true });
    }
}

export default new AppoitmentController();

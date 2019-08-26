import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Lucas Rosa',
        email: 'lucas.rosa@wintaylor.com',
        password_hash: '1234556677',
    });

    return res.json(user);
});

export default routes;

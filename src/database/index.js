import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class DataBase {
    constructor() {
        this.init();
        this.mongo();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }

    mongo() {
        // there is no user/password so the url has only the host, port and db name
        this.mongoConnection = mongoose.connect('mongodb://localhost:27017/gobarber', {
            useNewUrlParser: true,
            useFindAndModify: true,
        });
    }
}

export default new DataBase();

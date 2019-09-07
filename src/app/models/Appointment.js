import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
    static init(connection) {
        super.init(
            {
                date: Sequelize.DATE,
                cancelled_at: Sequelize.DATE,
            },
            {
                connection,
            }
        );

        return this;
    }

    static associate(models) {
        // when is 1 to n relationship the `as` field is obtigatory
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.User, {
            foreignKey: 'provider_id',
            as: 'provider',
        });
    }
}

export default Appointment;

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('appointments', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE', // inherit any update made in files table
                onDelete: 'SET NULL', // set field to null if deleted from files
                allowNull: false,
            },
            provider_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE', // inherit any update made in files table
                onDelete: 'SET NULL', // set field to null if deleted from files
                allowNull: false,
            },
            cancelled_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('appointments');
    },
};

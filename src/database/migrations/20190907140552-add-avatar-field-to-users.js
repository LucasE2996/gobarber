module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'avatar_id', {
            type: Sequelize.INTEGER,
            references: { model: 'files', key: 'id' },
            onUpdate: 'CASCADE', // inherit any update made in files table
            onDelete: 'SET NULL', // set field to null if deleted from files
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('users', 'avatar_id');
    },
};

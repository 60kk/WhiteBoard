const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('whiteboard_db', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const WhiteboardSession = sequelize.define('WhiteboardSession', {
    roomId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    data: {
        type: DataTypes.JSON, 
        allowNull: false,
    },
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = { sequelize, WhiteboardSession, User };

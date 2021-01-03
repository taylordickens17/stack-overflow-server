module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('post', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""
        }
    })
    return Comment;
}
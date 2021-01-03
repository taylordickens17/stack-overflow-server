module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""
        }
    })
    return Post;
}
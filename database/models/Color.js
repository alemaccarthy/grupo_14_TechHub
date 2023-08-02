module.exports = (sequelize, dataType) => {
    const alias = 'Color';
    const cols = {
        id: {
            primaryKey: true,
            type: dataType.INTEGER,
            autoIncrement: true
        },
        color: {
            type: dataType.STRING,
            allowNull: false
        },
    }

    const config = {
        tableName: 'colors',
        timestamps: false,
        paranoid: true
    }

    const Color = sequelize.define(alias, cols, config);

    Color.associate = models => {
        Color.belongsToMany(models.Product, {
            through: 'product_color',
            foreignKey: 'color_id',
            otherKey: 'product_id',
            as: 'products',
            
        });
    };

    return Color;
}
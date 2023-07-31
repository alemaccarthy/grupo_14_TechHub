module.exports = (sequelize, dataType) => {
    const alias = 'Color';
    const cols = {
        id: {
            primaryKey: true,
            type: dataType.INTEGER,
        },
        color: {
            type: dataType.STRING,
            allowNull: false
        },
        product_id: {
            type: dataType.INTEGER,
            allowNull: false
        }
    }

    const config = {
        tableName: 'colors',
        timestamps: false,
        paranoid: true
    }

    const Color = sequelize.define(alias, cols, config);

    Color.associate = models => {
        Color.belongsTo(models.Product, {
            as: 'product_colors',
            timestamps: false,
            foreignKey: 'product_id'
        });
    };

    return Color;
}
/*module.exports = (sequelize, dataType) => {
    const alias = 'Color';
    const cols = {
        id: {
            primaryKey: true,
            type: dataType.INTEGER,
        },
        quantity: {
            type: dataType.INTEGER,
            allowNull: false
        },
        color_1: {
            type: dataType.STRING,
            allowNull: true
        },
        color_2: {
            type: dataType.STRING,
            allowNull: true
        },
        color_3: {
            type: dataType.STRING,
            allowNull: true
        },
        color_4: {
            type: dataType.STRING,
            allowNull: true
        },

        product_id: {
            type: dataType.INTEGER,
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
            foreignKey: 'product_id'
        });
    };

    return Color;
}*/
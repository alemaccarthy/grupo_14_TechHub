module.exports = (sequelize, dataType) => {
    const alias = 'OrderItem';

    const cols = {

        id: {
            primaryKey: true,
            type: dataType.INTEGER,
            autoIncrement: true,
        },
        order_id: {
            type: dataType.INTEGER,
        },
        product_id: {
            type: dataType.INTEGER,
        },
        category_id: {
            type: dataType.INTEGER,
        },
        quantity: {
            type: dataType.INTEGER,
        },
        price: {
            type: dataType.DECIMAL,
        }
    };

    const config = {
        tableName: 'order_items',
        timestamps: false,
    };

    const orderItem = sequelize.define(alias, cols, config);

    orderItem.associate = models => {

        orderItem.belongsTo(models.Product, {
            as: 'orderItems',
            foreignKey: 'product_id'
        });

        orderItem.associate = models => {
            OrderItem.belongsTo(models.Order, {
                foreignKey: 'order_id',
                as: 'orderData',
            });
        };

    }

    return orderItem;

}
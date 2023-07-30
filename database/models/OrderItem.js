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
            references: {
                model: 'Order',
                key: 'id'
            }
        },
        product_id: {
            type: dataType.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        category_id: {
            type: dataType.INTEGER,
            references: {
                model: 'Category',
                key: 'id'
            }
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
            timestamps: false,
            foreignKey: 'product_id'
        });

        orderItem.associate = models => {
            OrderItem.belongsTo(models.Order, {
                foreignKey: 'order_id',
                timestamps: false,
                as: 'orderData',
            });
        };

    }

    return orderItem;

}
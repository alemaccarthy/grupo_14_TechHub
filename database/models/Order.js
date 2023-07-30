module.exports = (sequelize, dataType) => {
    const alias = 'Order';

    const cols = {

        id: {
            primaryKey: true,
            type: dataType.INTEGER,
            autoIncrement: true,
        },
        total_amount: {
            type: dataType.DECIMAL,
            allowNull: false,
        },
        user_id: {
            type: dataType.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    };

    const config = {
        tableName: 'orders',
        timestamps: false,
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = models => {
        Order.belongsTo(models.User, {
            as: 'user',
            timestamps: false,
            foreignKey: 'user_id',
        });

        Order.hasMany(models.OrderItem, {
            as: 'orderItems',
            timestamps: false,
            foreignKey: 'order_id'
        });
    };

    return Order;

}
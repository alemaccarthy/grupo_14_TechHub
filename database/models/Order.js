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
            allowNull: false
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
            foreignKey: 'user_id',
        });

        Order.hasMany(models.OrderItem, {
            as: 'orderItems',
            foreignKey: 'order_id'
        });
    };

    return Order;

}
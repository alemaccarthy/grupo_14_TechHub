// models/ProductColor.js
module.exports = (sequelize, DataTypes) => {
    const ProductColor = sequelize.define(
        'ProductColor',
        {
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id',
                },
                primaryKey: true,
            },
            color_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'colors',
                    key: 'id',
                },
                primaryKey: true,
            },
        },
        {
            tableName: 'product_color',
            timestamps: false,
        }
    );

    return ProductColor;
};

const Category = require("./Category");

module.exports = (sequelize, dataType) => {
    const alias = "Brand";

    const cols = {
        id: {
            primaryKey: true,
            type: dataType.INTEGER,
            autoIncrement: true,
        },
        name: {
            type: dataType.STRING,
        },
    };

    const config = {
        tableName: "brands",
        timestamps: false,
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = (models) => {
        Brand.HasMany(models.Product, {
            as: "products_brand",
            foreignKey: "brand_id",
        }); 
    };

    return Brand;
};
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
        }
    };

    const config = {
        tableName: "brands",
        timestamps: false,
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = (models) => {
        Brand.HasMany(models.Product, {
            as: "products_brand",
            timestamps: false,
            foreignKey: "brand_id",
        }); 
    };

    return Brand;
};

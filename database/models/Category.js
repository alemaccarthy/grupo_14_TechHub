module.exports = (sequelize, dataType) => {
    const alias = 'Category';

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
        tableName: 'categories',
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {

        Category.HasMany(models.Product, {
            as: 'products_category',
            timestamps: false,
            foreignKey: 'category_id'
        });  

    }
    return Category;
}
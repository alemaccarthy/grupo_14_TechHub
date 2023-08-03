module.exports = (sequelize, dataType) =>{
    const alias = 'Product';
    const cols = {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataType.STRING,
            allowNull: false
        },
        price:{
            type: dataType.INTEGER,
            allowNull: false
        },
        description:{
            type: dataType.STRING,
            allowNull: false
        },
        currency:{
            type: dataType.STRING
        },

        color_quantity: {
            type: dataType.INTEGER,
            allowNull: false
        },

        brand_id: {
            type: dataType.INTEGER,
            references: {
                model: 'brands',
                key: 'id'
            }
        },
        
        category_id: {
            type: dataType.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        },

    }
    const config = {
        tableName: 'products',
        timestamps: false,
        paranoid: true
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Brand, {
            as: 'brand',
            timestamps: false,
            foreignKey: 'brand_id'
        });
        Product.belongsTo(models.Category, {
            as: 'category',
            timestamps: false,
            foreignKey: 'category_id'
        });
        Product.hasMany(models.Image, {
            as: 'images',
            timestamps: false,
            foreignKey: 'product_id'
        });
        Product.hasMany(models.OrderItem, {
            as: 'items',
            timestamps: false,
            foreignKey: 'product_id'
        });
        Product.belongsToMany(models.Color, {
            through: 'product_color',
            foreignKey: 'product_id',
            otherKey: 'color_id',
            as: 'colors',     
        });
    }

    return Product;
}
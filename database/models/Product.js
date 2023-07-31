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
        images:{
            type: dataType.ARRAY(dataType.STRING),
            allowNull: false
        },
        deleted: {
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

        color_quantity: {
            type: dataType.INTEGER,
            allowNull: false
        }
        
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
        Product.hasMany(models.OrderItem, {
            as: 'items',
            timestamps: false,
            foreignKey: 'product_id'
        });
        Product.hasMany(models.Color, {
            as: 'colors',
            timestamps: false,
            foreignKey: 'color_id'
        });
    }

    return Product;
}
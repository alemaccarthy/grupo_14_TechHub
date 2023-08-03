module.exports = (sequelize, dataType) => {
    const alias = 'image';

    const cols = {

        id: {
            primaryKey: true,
            type: dataType.INTEGER,
            autoIncrement: true,
        },
        path: {
            type: dataType.STRING,
            allowNull: true,
        },
        product_id:{
            type: dataType.INTEGER
        }
    };

    const config = {
        tableName: 'products_images',
        timestamps: false,
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = models => {

        Image.belongsTo(models.Product, {
            as: 'product',
            timestamps: false,
            foreignKey: 'product_id'
        });  

    }
    return Image;
}
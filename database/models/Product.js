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
        brand:{
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
        category:{
            type: dataType.STRING,
            allowNull: false
        },
        images:{
            type: dataType.STRING
            //que más va aca????????????????????
        },
        colors:{
            // y con los colores que hacemos??????????????????????
        },
        deleted: {
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

    return Product;
}
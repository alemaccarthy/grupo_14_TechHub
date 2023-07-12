module.exports = (sequelize, dataTypes) =>{
    const alias = 'Product';
    const cols = {
        /// ACA VAN TODAS LAS COLUMNAS DE LA TABLA PRODUCT. CADA COLUMNA SEPARADA POR COMA Y PASADA COMO OBJETO {}. todas llevan un type: datatypes.INTEGER, etc)
        /// Para el id ponemos primaryKey: true, autoIncrement: true
    }
    const config = {
        tableName: 'products',
        timestamps: false,
    }
    
    const Product = sequelize.define(alias, cols, config);

    return Product;
}
const fs = require('fs');
function logMiddleware(req,res,next){
    fs.appendFileSync('log.txt', 'El usuario ha ingresado en la ruta ' + req.url);
    next();
}

module.exports = logMiddleware;
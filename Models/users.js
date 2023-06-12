const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const userModel = {
    route: '../data/users.json',

    findAll() {
        //leemos el JSON
        const usersJSON = fs.readFileSync(path.join(__dirname, this.route), "utf-8");

        //pasamos de JSON a JS
        const users = JSON.parse(usersJSON);

        return users;
    },

    findByEmail(email) {
        const findUser = this.findAll();

        //buscamos el índice del usuario
        let searched = findUser.find(el => el.email === email);

        if (!searched) null

        return searched;
    },

    createUser(newUser) {
        let users = this.findAll();
        newUser.id = uuid.v4();
        newUser.deleted = false;

        //agregamos el usuario al array
        users.push(newUser);

        //pasamos a JSON
        const usersJSON = JSON.stringify(users);

        //sobreescribimos el JSON
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);

        return users;
    },

    updateUser() {
        const users = this.findAll();
        const index = users.findIndex(el => el.email === email);
        //editamos las propiedades con los datos recibidos del formulario
        users[index].name = newData.name;
        users[index].lastname = newData.lastname;
        users[index].email = newData.email;
        users[index].password = newData.password;
        users[index].confirmPassword = newData.confirmPassword;
    },

    deleteUserByEmail(email) {
        const users = this.findAll();
        const index = users.findIndex(el => el.email === email);
        users[index].deleed = true;
    }
}

module.exports = userModel;

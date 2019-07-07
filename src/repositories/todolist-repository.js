const fs = require('fs');
const filename = './src/data/db.json';

const save = (todolist) => {

    const data = new Uint8Array(Buffer.from(JSON.stringify(todolist)));
    fs.writeFile(filename, data, (err) => {
        if (err) throw new Error('No se pudo grabar las tareas', err);
    });
}

module.exports = {
    save
}
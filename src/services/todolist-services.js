const repository = require('../repositories/todolist-repository');

let todolist = [];

const crear = (descripcion) => {
    const tarea = {
        descripcion,
        completado: false
    }
    todolist.push(tarea);
    repository.save(todolist);
    return tarea;
};

module.exports = {
    crear
}
const repository = require('../repositories/todolist-repository');

let todolist = repository.load();

const crearTarea = (descripcion) => {
    const tarea = {
        descripcion,
        completado: false
    }
    todolist.push(tarea);
    repository.save(todolist);
    return tarea;
};

const getTareas = () => {
    return todolist;
};

module.exports = {
    crearTarea,
    getTareas
}
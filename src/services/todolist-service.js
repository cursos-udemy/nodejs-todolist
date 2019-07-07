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

const actualizarTarea = async (descripcion, completado = true) => {
    const index = todolist.findIndex(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        throw new Error('No se encontro la tarea a actualizar');
    }
    todolist[index].completado = completado;
    repository.save(todolist)
    return todolist[index];
};

const borrarTarea = async (descripcion) => {
    const index = todolist.filter(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        throw new Error('No se encontro la tarea a borrar');
    }
    todolist.splice(index,1);
    repository.save(todolist)
    return true;
};

module.exports = {
    crearTarea,
    getTareas,
    actualizarTarea,
    borrarTarea
}
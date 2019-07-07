const paramDescripcion = {
    descripcion: { demand: true, alias: 'd', desc: 'descripcion de la tarea' }
};

const paramCompletado = {
    completado: { demand: false, alias: 'c', default: true, desc: 'indicador de tarea completada' }
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', { ...paramDescripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { ...paramDescripcion, ...paramCompletado })
    .command('listar', 'Muestra la lista de tareas pendientes')
    .help()
    .argv;

module.exports = {
    argv
}
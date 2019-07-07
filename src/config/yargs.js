const descripcion = { demand: true, alias: 'd', desc: 'descripcion de la tarea' };

const completado = { demand: false, alias: 'c', default: true, desc: 'indicador de tarea completada' };

const argv = require('yargs')
    .command('crear', 'Crea una tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('listar', 'Muestra la lista de tareas pendientes')
    .command('borrar', 'Borra una tarea de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}
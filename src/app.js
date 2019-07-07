
const { argv } = require('./config/yargs');
const colors = require('colors');
const todoListService = require('./services/todolist-services');

console.info('Todo-list App started ....'.bold.yellow);

const comando = argv._[0];

switch (comando) {
    case 'crear': {
        const tarea = todoListService.crearTarea(argv.descripcion);
        console.log('tarea: ', tarea);
        break;
    }
    case 'listar': {
        const todolist = todoListService.getTareas();
        console.info('========================================================================'.gray.bold);
        console.info('ESTADO'.bold.inverse + '\t\t| '.bold + 'TAREA'.bold.inverse);
        console.info('========================================================================'.gray.bold);
        if (todolist.length > 0) {
            todolist.forEach(tarea => {
                console.info(`${tarea.completado ? 'Completado'.green.bold : 'Pendiente'.red.bold}\t| ${tarea.descripcion}`);
            });
        } else {
            console.info('OYEEEEE AUN NO HAZ CARGADO TAREAS!'.bold.magenta);
        }
        console.info('========================================================================'.gray.bold);
        break;
    }
    case 'actualizar': {
        console.info('comado actualizar');
        break;
    }
    default: {
        console.error('Comando no reconocido'.bold.red);
        break;
    }
}
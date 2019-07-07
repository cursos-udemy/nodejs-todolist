
const { argv } = require('./config/yargs');
const colors = require('colors');
const todoListService = require('./services/todolist-services');

console.info('Todo-list App started ....'.bold.yellow);

const comando = argv._[0];

switch (comando) {
    case 'crear': {
        const tarea = todoListService.crear(argv.descripcion);
        console.log('tarea: ', tarea);
        break;
    }
    case 'listar': {
        console.info('comado listar');
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
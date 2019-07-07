const { argv } = require('./config/yargs');
const colors = require('colors');

console.info('Todo-list App started ....'.bold.yellow);

const comando = argv._[0];

switch (comando) {
    case 'crear': {
        console.info('comado crear');
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
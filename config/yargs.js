const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar.'
                })
                .option('f', {
                    alias: 'factor',
                    type: 'number',
                    default: 10,
                    describe: 'Factor de limite para la tabla.'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola.'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base debe ser numérica.'
                    }
                    if( isNaN(argv.f) ){
                        throw 'El factor debe ser numérico.'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
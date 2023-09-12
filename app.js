const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();
//console.log(argv.b);

crearArchivo( argv.b, argv.l, argv.f )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado.'.blue) )
    .catch( err => console.log(colors.red(err)) )


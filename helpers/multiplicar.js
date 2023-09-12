const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar, factor ) => {

        try {
            let salida = `'==========================='\nTabla de multiplicar del ${base}\n'==========================='\n`;
            let consola = `${'==========================='.brightBlue}\nTabla de multiplicar del ${colors.blue(base)}\n${'==========================='.brightBlue}\n`;

            for(i = 1; i <= factor; i++){
                salida += `${base} x ${i} = ${base*i}.\n`
                consola += `${base} ${'x'.brightBlue} ${i} ${'='.brightBlue} ${base*i}.\n`
            }

            if(listar){
                console.log(consola);
            }
            
            //Si sucede un error deberia tomarse con un try - catch
            fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
            
            return `tabla-${base}.txt`;
        } catch (err) {
            throw err;
        }

}

module.exports = {
    crearArchivo
}
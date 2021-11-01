const fs = require("fs");
const colors = require("colors");

const createFile = async (value = 5, limit, hasToList = false) => {

    let salida = '';
    let mostrar = '';

    for(let i = 1; i <= limit; i++){
        mostrar += `${i} ${"x".green} ${value} ${"=".green} ${i * value}\n`;
        salida += `${i} x ${value} = ${i * value}\n`;
    }

    if(hasToList){
        console.info("========================".green);
        console.info("Tabla del:".green, colors.blue(value));
        console.info("========================".green);
        console.log(mostrar);
    }

    try{

        await fs.writeFile(`./salida/tabla-${value}.txt`, salida, (error) => {
            if(error) throw Error(error);
        })
    
        return `tabla-${value}.txt`

    }catch(error){
        return error;
    }   
}

module.exports = {
    createFile
}
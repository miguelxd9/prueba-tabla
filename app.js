//import {fs} from "fs";
const {createFile} = require('./helpers/multiplier');
const argv = require('./config/yargs');
const colors = require("colors");


createFile(argv.b, argv.h, argv.l)
.then(nameFile => console.log(`se ha creado el archivo ${nameFile.rainbow}`))
.catch(error =>  console.log("[Error al crear el archivo]"))

/*
console.clear();

const limit = 10;

const [ , , arg3 = 'base=5'] = process.argv;
const [, value = 5] = arg3.split("=");


createFile(value, limit)
    .then(nameFile => console.log(`se ha creado el archivo ${nameFile}`))
    .catch(error =>  console.log("[Error al crear el archivo]"))
 */
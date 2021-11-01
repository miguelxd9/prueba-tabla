const argv = require("yargs")
    .option("b",{
        alias: "base",
        type: "number",
        demandOption: true
    })
    .option("l", {
        alias: "listar",
        describe: "Muestra en lista la base hasta el 10",
        type: "boolean",
        default: false
    })
    .options("h", {
        alias: "hasta",
        describe: "Límite del multiplicador",
        type: "number",
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw Error("La base tiene que ser un número");
        }                
        return true;
    })
    .argv;

module.exports = argv;
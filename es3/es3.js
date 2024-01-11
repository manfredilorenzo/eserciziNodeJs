import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let arrayParole = [];
let ultimeTreLettere = "";

fs.readFile("./660000_parole_italiane.txt", (error, data) => {
    if (error) {
        throw error;
    }

    console.log("parole file: " + data);
    arrayParole = data.toString().split("\n");

    readline.question("Inserisci parola: \n", parola => {
        console.log("parola: " + parola);
        
        if (parola.length >= 3) {
            ultimeTreLettere = parola.slice(-3);
            console.log("Ultime tre lettere: " + ultimeTreLettere);
        } else {
            console.log("parola troppo corta");
        }

        console.log("lunghezza array: " + arrayParole.length);

        const paroleRima = [];
        for (let i = 0; i < arrayParole.length; i++) {
            if (arrayParole[i].slice(-3) == ultimeTreLettere) {
                paroleRima.push(arrayParole[i]);
            }
        }
        console.log ("Rime trovate: " + paroleRima.length);
        console.log("Rime: "+ paroleRima);
        readline.close();
    });
});

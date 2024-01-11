import fetch from 'node-fetch';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const fs = require("fs");
const json = JSON.parse(fs.readFileSync("conf.json"));
const token = json.token;

const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question("Inserisci chiave: \n", chiave => {
    readline.question("Inserisci valore: \n", valore => {
        console.log("chiave: " + chiave);
        console.log("valore: " + valore);

        // fetch 

        fetch("https://ws.progettimolinari.it/cache/set", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                key: token
            },
            body: JSON.stringify({
                key: chiave,
                value: valore
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        readline.close();
    })
})

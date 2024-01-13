import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n, corrente = 1, prossimo = 1, result = []) {
    if (n <= 0) {
        setImmediate(() => {
            console.log(result);
            rl.close();
        });
        return;
    }

    result.push(corrente);
    setImmediate(() => {
        fibonacci(n - 1, prossimo, corrente + prossimo, result);
    });
}

rl.question('Inserisci un numero: ', (num) => {
    const n = parseInt(num, 10);

    if (n < 0) {
        console.log('Inserisci un numero maggiore di 0.');
        rl.close();
    } else {
        fibonacci(n);
    }
});

rl.on('close', () => {
    process.exit(0);
});

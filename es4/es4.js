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


/*
let val = [];
function fibo(n) {

    if (n == 2) {
        val = [1, 1];

    } else {
        val = f(n - 1);
        val.push(val[n - 2] + val[n - 3]);
    }
    return val;
}


function fiboAsinc(n, callback) {
    if (n == 2) {
        val = [1, 1];
        callback(val);
    }
    else {
        setImmediate(() => {
            fiboAsinc(n - 1, (val) => {
                val.push(val[n - 2] + val[n - 3]);
                callback(val);
            });
        });
    });

} 
    

*/
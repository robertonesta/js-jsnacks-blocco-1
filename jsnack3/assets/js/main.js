/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

//Il software deve chiedere per 10 volte all’utente di inserire un numero.


/*let sum = 0
for (let i = 0; i < 10; i++) {
    let number = Number(prompt("inserisci un numero"))
    sum += number
}

// Il programma stampa la somma di tutti i numeri inseriti.
 console.log(sum) */




/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let i = 0; 
let sum = 0;
while (i < 10) {
    let number = Number(prompt("inserisci un numero"))
    sum += number
    i++
}

console.log(sum)

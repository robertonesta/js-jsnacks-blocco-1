/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/



const oddnumbers = ''
for (i = 0; i < 6; i++){
    let number = Number(prompt("inserisci un numero"))

    if (number % 2 != 0) {
        console.log(number)
    } 

}
//while loop
x = 0
while (x < 6){
    let number = Number(prompt("inserisci un numero"))

    if (number % 2 != 0) {
        console.log(number)
    } 
    
    x++
}

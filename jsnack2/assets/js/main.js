/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

//L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("inserisci una parola") ;

const secondWord= prompt("inserisci una seconda parola") ;

//Il software stampa prima la parola più corta, poi la parola più lunga.*/

if (firstWord.length > secondWord.length){
    console.log (`la parola più corta è ${secondWord}, quella più lunga è ${firstWord}`)
} else if (firstWord.length < secondWord.length) {
    console.log (`la parola più corta è ${firstWord}, quella più lunga è ${secondWord}`)
} else{
    console.log (`${firstWord} e ${secondWord} hanno la stessa lunghezza`)
}

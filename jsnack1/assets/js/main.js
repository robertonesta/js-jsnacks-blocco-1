/*L’utente inserisce due numeri in successione, con due prompt.*/

const firstRandomNumber = Number(prompt("scegli un numero da 1 a 100"))

const secondRandomNumber = Number(prompt("scegli un numero da 1 a 100"))

const output = document.getElementById("output_number")

/*Il software stampa il maggiore.*/

if (firstRandomNumber > secondRandomNumber) {
    console.log("firstRandomNumber")
    output.innerHTML = (firstRandomNumber)

} else {
    console.log("secondRandomNumber")
    output.innerHTML = (secondRandomNumber)
}


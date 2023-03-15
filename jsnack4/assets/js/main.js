/*Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

let guests = [
    'marco',
    'vittorio',
    'giacomo',
    'riccardo',
    'luca',
    'roberto',
]

let access = false;
let guestname = prompt("inserisci qui il tuo nome")

for (let i = 0; i = guests.length; i++){
    
    let guest = guests.length[i];

    if (guestname === guest) {
        access = true
        break
    }
}

if (access){
    console.log(`ciao ${guestname}, benvenuto`)
} else {
    console.log(`mi dispiace, ${guestname}, non sei tra gli invitati`)
}
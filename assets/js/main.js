/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?
Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare

2. Proviamo ad immaginare le operazioni che
vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

3. Facciamo attenzione all'ordine delle condizioni che usiamo

//----------
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
`append()` oppure
`.innerHTML`
`.insertAdjacentHTML()`
A voi la scelta
//----------
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */


/* 
1. create variable that will be LOOPED
2. open a FOR LOOP and inizialize variable from START VALUE
3. define END VALUE
4. ⚠️IMPORTANT: define increment_ without INCREMENT falling into INFINITYloop is unavoidable
5. define IF console for multiples of 3 AND for multiples of 5 = "FizzBuzz"
6. define ELSE IF console for multiples of 3 = "Fizz"
7. define ELSE IF console for multiples of 3 = "Buzz"
8. display in console
*/
const tableNumber = document.getElementById("tableNumber");

for (let i = 1; i <= 50; i++) { // use "%" to calculate multiples

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // each number multiples of 3 AND 5 must turn "FizzBuzz"

        const tableNumber = document.createElement("div");
        tableNumber.innerHTML = "FizzBuzz";
        tableNumber.append(tableNumber);// add in page "FizzBuzz"

    } else if (i % 3 === 0) {
        console.log("Fizz"); // each number multiples of 3 must turn "Fizz"

        const tableNumber = document.createElement("div");
        tableNumber.innerHTML = "Fizz";
        tableNumber.append(tableNumber);// add in page "Fizz"

    } else if (i % 5 === 0) {
        console.log("Buzz"); // each number multiples of 5 must turn "Buzz"

        const tableNumber = document.createElement("div");
        tableNumber.innerHTML = "Buzz";
        tableNumber.append(tableNumber);// add in page "Buzz"

    } else {
        console.log(i);// each other numbers

        const p = document.createElement("div");
        p.innerHTML = i;
        tableNumber.append(p);// add in page each numbers
    }
}
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 - number: rappresenta un numero, che può essere intero (4), positivo o negativo (-4), o anche puntato (4.1)
 - string: rappresenta un testo, composto da una o più parole che possono essere separate da spazi. è possibile anche 
    inserire un numero nella stringa, che in questo caso verrà quindi trattato come string, non come number.
 - boolean: rappresenta il concetto di vero o falso; può quindi assumere solo due valori, true (vero) o false (falso)
 - undefined: rappresenta un valore indefinito, ovvero chi ha creato una variabile di questo tipo non ha assegnato ad 
    essa nessun valore tra quelli precedenti.
 - null: rappresenta un valore nullo, ovvero chi ha creato una variabile di questo tipo ha deciso appositamente di 
    non assegnare ad essa nessun valore.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 let name = "Alessandro";
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
  12+20;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 const x = 12;
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
  name = "Fugazza";
  const cName = "Alessandro";
  cName = "Fugazza";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
  4-x;
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
  const name1 = "john";
  const name2 = "John";
  name1 !== name2;
  name1.toLowerCase() === name2.toLowerCase();
*/

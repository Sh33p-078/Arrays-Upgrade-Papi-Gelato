let getal = prompt("Voer een getal in:");
let array = [];

// Vul de array met getallen van 1 tot het ingevoerde getal
for (let i = 1; i <= getal; i++) {
    array.push(i);
}

// Print de pyramide oplopend naar het scherm
for (let i = 0; i < array.length; i++) {
    let output = "<br>";
    for (let j = 0; j <= i; j++) {
        output += array[j] + " ";
    }
    document.write(output);
}
let getal = prompt("Voer een getal in:");
let array = [];
for (let i = 1; i <= getal; i++) {
    array.push(i);
}
for (let i = 0; i < array.length; i++) {
    let output = "<br>";
    for (let j = 0; j <= i; j++) {
        output += array[j] + " ";
    }
    document.write(output);
}
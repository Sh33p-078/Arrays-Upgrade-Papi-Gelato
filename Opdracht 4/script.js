// Maak een array met de tafels die we willen berekenen
var tafels = [2, 4, 6, 8, 10];

// Loop door de tafels array en schrijf de tafels naar het scherm
for (var i = 0; i < tafels.length; i++) {
    // Schrijf de tafelnaam naar het scherm
    document.write("<h3>Tafel van " + tafels[i] + ":</h3>");

    // Maak een tabel om de tafel in te zetten
    document.write("<table>");

    // Loop door de getallen 1 t/m 10 en bereken de producten
    for (var j = 1; j <= 10; j++) {
        var product = tafels[i] * j;

        // Schrijf het product in een tabelrij
        document.write("<br>" + tafels[i] + " x " + j + " = " + product);
    }
}
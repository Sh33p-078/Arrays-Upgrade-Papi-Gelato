var tafels = [2, 4, 6, 8, 10];

for (var i = 0; i < tafels.length; i++) {
    document.write("<h3>Tafel van " + tafels[i] + ":</h3>");
    for (var j = 1; j <= 20; j++) {
        var product = tafels[i] * j;
        document.write("<br>" + tafels[i] + " x " + j + " = " + product);
    }
}
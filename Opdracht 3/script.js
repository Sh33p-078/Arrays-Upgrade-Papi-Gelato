var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function optellen(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var sum = arr1[i] + arr2[i];
        result.push(arr1[i] + " + " + arr2[i] + " = " + sum);
    }
    document.getElementById("optellen").innerHTML = "Optellen: <br>" + result.join("<br>");
}

function aftrekken(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var diff = arr1[i] - arr2[i];
        result.push(arr1[i] + " - " + arr2[i] + " = " + diff);
    }
    document.getElementById("aftrekken").innerHTML = "<br>Aftrekken: <br>" + result.join("<br>");
}

function vermenigvuldigen(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var product = arr1[i] * arr2[i];
        result.push(arr1[i] + " x " + arr2[i] + " = " + product);
    }
    document.getElementById("vermenigvuldigen").innerHTML = "<br>Vermenigvuldigen: <br>" + result.join("<br>");
}

function delen(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var quotient = arr1[i] / arr2[i];
        result.push(arr2[i] + " / " + arr1[i] + " = " + quotient);
    }
    document.getElementById("delen").innerHTML = "<br>Delen: <br>" + result.join("<br>");
}

optellen(arrayEen, arrayTwee);
aftrekken(arrayTwee, arrayEen);
vermenigvuldigen(arrayEen, arrayTwee);
delen(arrayTwee, arrayEen);
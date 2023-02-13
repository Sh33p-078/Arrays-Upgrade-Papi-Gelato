var daysOfWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

// Alle dagen van de week
document.write("<h2>Alle dagen van de week zijn:</h2>");
document.write(daysOfWeek.join(", ") + "<br><br>");

// Werkdagen
document.write("<h2>De werkdagen zijn:</h2>");
document.write(daysOfWeek.slice(0, 5).join(", ") + "<br><br>");

// Weekenddagen
document.write("<h2>De weekenddagen zijn:</h2>");
document.write(daysOfWeek.slice(-2).join(", ") + "<br><br>");

// Alle dagen van de week in omgekeerde volgorde
document.write("<h2>Alle dagen van de week in omgekeerde volgorde zijn:</h2>");
document.write(daysOfWeek.reverse().join(", ") + "<br><br>");

// Werkdagen in omgekeerde volgorde
document.write("<h2>De werkdagen in omgekeerde volgorde zijn:</h2>");
document.write(daysOfWeek.slice(0, 5).reverse().join(", ") + "<br><br>");

// Weekenddagen in omgekeerde volgorde
document.write("<h2>De weekenddagen in omgekeerde volgorde zijn:</h2>");
document.write(daysOfWeek.slice(-2).reverse().join(", "));
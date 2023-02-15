let names = [];

while (true) {
    let name = prompt("Enter a name (or 'stop' to finish):");
    if (name === "stop") {
        break;
    }
    names.push(name);
}

if (names.length < 3) {
    alert("Error: at least 3 names are required.");
} else {
    let namesList = document.getElementById("names-list");
    for (let i = 0; i < names.length; i++) {
        let li = document.createElement("li");
        li.textContent = names[i];
        namesList.appendChild(li);
    }
}
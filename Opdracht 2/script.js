let names = [];

for (;;) {
    let name = prompt("Enter a name (or 'stop' to finish):");
    if (name === "stop") {
        break;
    }
    names.push(name);
}
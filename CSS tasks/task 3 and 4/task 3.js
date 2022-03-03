window.alert("enter a number between -3 and 3 ");
var x = window.prompt("Enter your number: ");
window.alert(" enter a letter F or M");
var y = window.prompt("Enter your letter: ");
// alert("Your name is " + name);

function generation(x, y) {
    if (x === -3 && y === "m") {
        return "great grandfather"
    } else if (x === -3 && y === "f") {
        return "great grandmother"
    } else if (x === -2 && y === "m") {
        return "grandfather"
    } else if (x === -2 && y === "f") {
        return "grandmother"
    } else if (x === -1 && y === "f") {
        return "mother"
    } else if (x === -1 && y === "m") {
        return "father"
    } else if (x === 0 && y === "m") {
        return "me!"
    } else if (x === 0 && y === "f") {
        return "me!"
    } else if (x === 1 && y === "m") {
        return "son"
    } else if (x === 1 && y === "f") {
        return "daughter"
    } else if (x === 2 && y === "m") {
        return "grandson"
    } else if (x === 2 && y === "f") {
        return "granddaughter"
    } else if (x === 3 && y === "m") {
        return "great grandson"
    } else if (x === 3 && y === "f") {
        return "great granddaughter"
    }
}
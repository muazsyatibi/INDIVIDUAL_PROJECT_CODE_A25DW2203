// Name: Muaz Syatibi Bin Mokhzani
// Matric No: A25DW2203

function getValues() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerHTML = "Please enter both numbers!!";
        return null;
    }

    return { a: a, b: b };
}

function add() {
    let values = getValues();

    if (values !== null) {
        document.getElementById("result").innerHTML = values.a + values.b;
    }
}

function subtract() {
    let values = getValues();

    if (values !== null) {
        document.getElementById("result").innerHTML = values.a - values.b;
    }
}

function multiply() {
    let values = getValues();

    if (values !== null) {
        document.getElementById("result").innerHTML = values.a * values.b;
    }
}

function divide() {
    let values = getValues();

    if (values !== null) {
        if (values.b === 0) {
            document.getElementById("result").innerHTML = "Cannot divide by zero :(";
        } else {
            document.getElementById("result").innerHTML = values.a / values.b;
        }
    }
}

function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
}
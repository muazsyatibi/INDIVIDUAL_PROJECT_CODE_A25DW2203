// Name: Muaz Syatibi Bin Mokhzani
// Matric No: A25DW2203

function getValue() {
    let value = parseFloat(document.getElementById("value").value);

    if (isNaN(value)) {
        document.getElementById("converterResult").innerHTML = "Please enter a value.";
        return null;
    }

    return value;
}

function cmToMeter() {
    let value = getValue();

    if (value !== null) {
        let result = value / 100;
        document.getElementById("converterResult").innerHTML =
            value + " cm = " + result + " meter";
    }
}

function meterToCm() {
    let value = getValue();

    if (value !== null) {
        let result = value * 100;
        document.getElementById("converterResult").innerHTML =
            value + " meter = " + result + " cm";
    }
}

function meterToKm() {
    let value = getValue();

    if (value !== null) {
        let result = value / 1000;
        document.getElementById("converterResult").innerHTML =
            value + " meter = " + result + " km";
    }
}

function kmToMeter() {
    let value = getValue();

    if (value !== null) {
        let result = value * 1000;
        document.getElementById("converterResult").innerHTML =
            value + " km = " + result + " meter";
    }
}

function clearConverter() {
    document.getElementById("value").value = "";
    document.getElementById("converterResult").innerHTML = "Result will appear here.";
}
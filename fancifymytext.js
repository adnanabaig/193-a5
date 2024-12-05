// Display alert to test JavaScript
function makeTextBigger() {
    let textArea = document.getElementById("text-area");
    textArea.style.fontSize = "24pt";
}

// Apply fancy style
function applyFancyStyle() {
    let textArea = document.getElementById("text-area");
    if (document.getElementById("fancy-radio").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

// Apply boring style
function applyBoringStyle() {
    let textArea = document.getElementById("text-area");
    if (document.getElementById("boring-radio").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Convert text to uppercase and add "-Moo" to sentences
function mooifyText() {
    let textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i] + "-Moo";
    }
    textArea.value = sentences.join(".");
}

//const cipher = {
//}
//export default cipher;

function encode() {
    let originalMessage = document.getElementById("inCifrar").value;
    let offset = parseInt(document.getElementById("numero").value);

    let final = "";
    for (let i = 0; i < originalMessage.length; i++) {
        let valorChar = originalMessage[i].charCodeAt();
        if (valorChar >= 65 && valorChar <= 90) {
            final += String.fromCharCode(((valorChar - 65 + offset) % 26) + 65);
        } else if (valorChar >= 97 && valorChar <= 122) {
            final += String.fromCharCode(((valorChar - 97 + offset) % 26) + 97);
        } else {
            final += originalMessage[i];
        }
    }
    document.getElementById('demo1').innerHTML = final;

}
function decode() {
    let originalMessage = document.getElementById("inDecifrar").value;
    let offset = parseInt(document.getElementById("numero").value);

    let final = "";
    for (let i = 0; i < originalMessage.length; i++) {
        let valorChar = originalMessage[i].charCodeAt();
        if (valorChar >= 65 && valorChar <= 90) {
            final += String.fromCharCode(((valorChar - 65 - offset + 26) % 26) + 65);
        } else if (valorChar >= 97 && valorChar <= 122) {
            final += String.fromCharCode(((valorChar - 97 - offset + 26) % 26) + 97);
        } else {
            final += originalMessage[i];
        }
    }
    document.getElementById('demo2').innerHTML = final;

}

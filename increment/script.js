function incrementar() {
    let num = document.getElementById("numero").innerText;
    let newNum = parseInt(num) + 1;
    document.getElementById("numero").innerText = String(newNum);
}

function decrementar() {
    let num = document.getElementById("numero").innerText;
    if(parseInt(num) > 0) {
        let newNum = parseInt(num) - 1;
        document.getElementById("numero").innerText = String(newNum);
    } else {
        console.log("Numero não pode ser menor que 0");
    }
}

// var num = document.getElementById("numero").innerText;

// function incrementar() {
//     let newNum = parseInt(num) + 1;
//     num = String(newNum);
// }

// function decrementar() {
//     if(parseInt(num) > 0) {
//         let newNum = parseInt(num) - 1;
//         num = String(newNum);
//     } else {
//         console.log("Numero não pode ser menor que 0");
//     }
// }
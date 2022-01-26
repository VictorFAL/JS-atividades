function incrementar() {
    let num = document.getElementById("numero").innerText;
    let newNum = parseInt(num) + 1;
    document.getElementById("numero").innerText = String(newNum);
    document.getElementById("msg").innerText = ""
}

function decrementar() {
    let num = document.getElementById("numero").innerText;
    if(parseInt(num) > 0) {
        let newNum = parseInt(num) - 1;
        document.getElementById("numero").innerText = String(newNum);
    } else {
        document.getElementById("msg").innerText = "Número não pode ser menor que zero"
    }
}
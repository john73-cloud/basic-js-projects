let numstore = ""
let symstore = ""
let x = 0
let y = 0
let main = document.querySelector(".main")
let result = document.querySelector(".result")
let num = document.querySelectorAll(".num")
let sym = document.querySelectorAll(".sym")
let equalto = document.querySelector(".equalto")
for (i = 0; i < num.length; i++) {
    let numi = num[i].innerHTML
    num[i].onclick = () => {
        numstore += numi
        render(numi, "num")
    }
}
for (i = 0; i < sym.length; i++) {
    let symi = sym[i].innerHTML
    sym[i].onclick = () => {
        symstore = symi
        x = parseInt(numstore)
        numstore = ""
        render("", "sym")
    }
}
equalto.addEventListener("click", () => {
    y = parseInt(numstore)
    numstore = ""
    if (symstore == "+") {
        render(x + y, "equals")
    }
    if (symstore == "-") {
        render(x - y, "equals")
    }
    if (symstore == "*") {
        render(x * y, "equals")
    }
    if (symstore == "/") {
        render(x / y, "equals")
    }
})

function render(num, where) {
    if (where == 'num') {
        result.innerHTML += num
    }
    if (where == "sym") {
        main.innerHTML = x + " " + symstore
        result.innerHTML = ""
    }
    if (where == "equals") {
        result.innerHTML = num;
        main.innerHTML = x + " " + symstore + " " + y + " " + "="
    }
    if (y == 0) {

    }
}
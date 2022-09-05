let num1store = ""
let symstore = ""
let x = 0
let y = 0

let num = document.querySelectorAll(".num")
let sym = document.querySelectorAll(".sym")
let equalto = document.querySelector(".equalto")

for (i = 0; i < num.length; i++) {
    let numi = num[i].innerHTML
    num[i].onclick = () => {
        num1store += numi
        console.log(num1store)
    }
}


for (i = 0; i < sym.length; i++) {
    let symi = sym[i].innerHTML
    sym[i].onclick = () => {
        x = parseInt(num1store)
        num1store = ""
        symstore = symi
    }
}
equalto.addEventListener("click", () => {
    y = parseInt(num1store)
    num1store = ""
    if (symstore == "+") {
        console.log(x + y)
    }
})
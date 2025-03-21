let firstNumber = Number(prompt(`Enter your first Number, please!`));
console.log(firstNumber);
let secondNumber = Number(prompt(`Enter the second number, please!`));
console.log(secondNumber);
document.write(`<span id="first">${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}</span>`);
document.getElementById("first").style.fontSize = `50px`
document.getElementById("first").style.fontWeight = `bold`
document.getElementById("first").style.marginLeft = `30px`
document.getElementById("first").style.display = `flex`
document.getElementById("first").style.marginTop = `50px`
document.write(`<span id="second">${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}</span>`)
document.getElementById("second").style.fontSize = `50px`
document.getElementById("second").style.fontWeight = `bold`
document.getElementById("second").style.marginLeft = `30px`
document.getElementById("second").style.display = `flex`
document.getElementById("second").style.marginTop = `50px`
document.write(`<span id="third">${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}</span>`);
document.getElementById("third").style.fontSize = `50px`
document.getElementById("third").style.fontWeight = `bold`
document.getElementById("third").style.marginLeft = `30px`
document.getElementById("third").style.display = `flex`
document.getElementById("third").style.marginTop = `50px`
document.write(`<span id="fourth">${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}</span>`)
document.getElementById("fourth").style.fontSize = `50px`
document.getElementById("fourth").style.fontWeight = `bold`
document.getElementById("fourth").style.marginLeft = `30px`
document.getElementById("fourth").style.display = `flex`
document.getElementById("fourth").style.marginTop = `50px`

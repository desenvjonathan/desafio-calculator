let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const restDiv = numberOne % numberTwo

alert ('A soma dos dois números é: ' + sum)
alert ('A subtração dos dois números é: ' + sub)
alert ('A Multiplicação dos dois números é: ' + multi)
alert ('A Divisão dos dois números é: ' + div)
alert ('O resto da divisão dos dois números é: ' + restDiv)
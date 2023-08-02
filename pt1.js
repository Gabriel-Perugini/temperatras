// criei uma variavel chamada kelvin com o valor de 293
var kelvin = 293
// criei uma variavel chamada celsius cuja o valor é 273 a menos que o valor da kelvin
var celsius = kelvin - 273
// criei uma variavel que calcula fahrenheit com base no valor de celsius
var Fahrenheit = celsius * (9/5) + 32 
//aredondei para baixo os decimais de fahrenheit
Math.floor(Fahrenheit)
// console log
console.log(`A temperatura é ${kelvin}(Em kelvin)`)
console.log(`A temperatura é ${celsius}(Em celsius)`)
console.log(`A temperatura é ${Fahrenheit}(Em fahrenheit)`)

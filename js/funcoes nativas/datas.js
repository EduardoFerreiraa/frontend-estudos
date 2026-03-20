const data = new Date()
/*
data.toString()

let d = data.getDate()
let m = data.getMonth() + 1
let y = data.getFullYear()
console.log(`Data: ${d}/${m}/${y}`)

let hour = data.getHours()
let min = data.getMinutes()
let seconds = data.getSeconds()
console.log(`Hora: ${hour}:${min}:${seconds}`)
*/

// Operações com datas
/*
data.setDate(data.getDate() + 6)
data.setMonth(data.getMonth() + 8)
data.setFullYear(data.getFullYear() + 1)

let d = data.getDate()
let m = data.getMonth() + 1
let y = data.getFullYear()
console.log(`Data: ${d}/${m}/${y}`)
*/

data.setHours(data.getHours() + 1)
data.setMinutes(data.getMinutes() + 15)
data.setSeconds(data.getSeconds() + 50)

let hour = data.getHours()
let min = data.getMinutes()
let seconds = data.getSeconds()

console.log(`Hora: ${hour}:${min}:${seconds}`)
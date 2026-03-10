const data = new Date()
data.toString()

let d = data.getDate()
let m = data.getMonth() + 1
let y = data.getFullYear()

console.log(`Data: ${d}/${m}/${y}`)

let hour = data.getHours()
let min = data.getMinutes()
let seconds = data.getSeconds()

console.log(`Hora: ${hour}:${min}:${seconds}`)
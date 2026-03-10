const data = new Date()
data.toString()

let d = data.getDate()
let m = data.getMonth() + 1
let y = data.getFullYear()

console.log(`Data: ${d}/${m}/${y}`)

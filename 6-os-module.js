const os = require("os")

//info about user
const user = os.userInfo()
console.log(user)

//method that returns uptime
console.log(`The system uptime is ${os.uptime} seconds`)

//Object with OS Info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalemem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS)
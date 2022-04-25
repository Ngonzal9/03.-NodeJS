const name = require('./4-names')
const testfunction = require('./5-utils')

name.Name.forEach(item => {
    console.log(testfunction(item))
})

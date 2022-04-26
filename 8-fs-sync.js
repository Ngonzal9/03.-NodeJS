const {readFileSync , writeFileSync} = require("fs")
console.log("Start")
const first = readFileSync("./Subfolder/first.txt", "utf8")
const second = readFileSync("./Subfolder/second.txt", "utf8")
console.log(first + "\n" + second)

const result = writeFileSync(
    "./Subfolder/ResultSync.txt",
    first + "\n" + second,
    {flag: "a"}
)

console.log("finish")
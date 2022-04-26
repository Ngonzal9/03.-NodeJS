const {readFile , writeFile} = require("fs")

console.log("start")
readFile("./subfolder/first.txt", "utf8", (err, result) =>
{
    if (err)
    {
        console.log(err)
        return
    }
    const first = result
    readFile("./subfolder/second.txt", "utf8", (err, result) => 
    {
        if (err)
        {
            console.log(err)
            return
        }
        const second = result
        writeFile("./subfolder/result-async.txt",
        `here is the async result ${second} \n ${second}` , (err,result) =>
        {
            if (err)
            {
                console.log(err)
                return
            }
            console.log("done with this file")
        })
    })
})
console.log("done")
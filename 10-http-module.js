const http = require("http")
const server = http.createServer((req, res) =>
{
    if (req.url === '/')
    {
        res.write("Welcome to my server")
        res.end()
    }
    else if (req.url === '/about')
    {
        res.write("this is just a test")
        res.end()
    }
    else
    {
        res.end(`
        <h1>Ooops this page doesn't exist</h1>
        <p>we couldnt find it</p>
        <a href="/">back home</a>
        `)
    }
})
server.listen(5000)
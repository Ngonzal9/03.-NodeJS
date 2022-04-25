//globals -- no window
//__dirname - file path
//__filename - file name
//require - function to use modules (Common JS)
//module - info about current module (file)
//process - info about environment where the program is being excuted

console.log(__dirname + "\n\n")
console.log(__dirname + __filename )

setInterval( () => {
    console.log("This is a test \n")
}, 10000 )
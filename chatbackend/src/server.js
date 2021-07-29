const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const PORT = process.env.PORT||5000
const app = express()
const server = http.createServer(app)
const route = require("./controller/routes")
const io=socketio(server)
app.use(route)

io.on('connection',(socket)=>{
    console.log("we had a connection ")
    socket.on('disconnect',()=>{
        console.log('user has left')
    })
})
const start =async()=>
{
    server.listen(PORT,()=>{
        console.log(`socket listening${PORT}`)
    })
}

module.exports=start
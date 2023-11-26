//import json server library
const jsonServer = require("json-server")

//create json server
const taskManagerServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware
const middleware = jsonServer.defaults()

//use middleware in server
taskManagerServer.use(middleware)
taskManagerServer.use(router)

//setup port
const port= 5000 || process.env.PORT

//to listen
taskManagerServer.listen(port,()=>{
    console.log(`taskManagerServer is started at ${port} and waiting for the request`);
})


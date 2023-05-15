const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./db/Database.js');


const PORT = process.env.PORT || 4000

// uncaught exception error
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
})


// config
dotenv.config({
    path:"../backend/config/.env"
})

connectDatabase();

// create server
const server = app.listen(PORT, ()=>{
    console.log(`server is working on port: ${PORT}`)
});


// unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`shutting down server for ${err.message}`);
    console.log(`shutting down the server due to unhandle promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})
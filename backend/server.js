const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./db/Database.js');


const PORT = process.env.PORT || 4000


// config
dotenv.config({
    path:"../backend/config/.env"
})

connectDatabase();

// create server
const server = app.listen(PORT, ()=>{
    console.log(`server is working on port: ${PORT}`)
});
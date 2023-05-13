const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/ecommerce"

const connectDatabase = ()=>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data)=>{
        console.log(`mongodb is connected with server: ${uri}`);
    }).catch((error) => {
        console.error('Error connecting to the database:', error);
      });
}

module.exports = connectDatabase
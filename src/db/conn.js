const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect("mongodb://localhost:27017/vinay_data",  { useUnifiedTopology: true , useNewUrlParser: true } )
.then( () => { console.log("Connection Succesful ..") } )
.catch((err) => console.error(err) )
 



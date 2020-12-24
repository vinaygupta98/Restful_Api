const express = require("express");
require("./db/conn");
const app = express();
const Student = require("./models/students")
const Port = process.env.PORT || 3000;
// requiring  
const paths = require('./routers/paths');

app.use(express.json());

app.use(paths);
// create  a new student 
app.post("/students", (req,res) => {
    console.log(req.body);
    const user = new Student(req.body) ;
    user.save().then( () => { 
        res.status(201).send(user);
        }).catch((e) => { 
            res.status(400).send(e);
            }) 
 })

 // get data from database

 app.get("/students", async(req,res) => {
        try{
         const studentsData = await Student.find();
         res.send(studentsData)
        }catch(e){
            res.status(400).send(e)
        }
 })

app.get("/students/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Student.find({_id});
        res.send(studentsData)

    } catch (err) {
        res.status(400).send(err)
    }
} ) 


app.listen(Port , () => { console.log(`Server running at :${Port}`); })
const express= require("express");
const Student = require("../models/students")
const router = new express.Router();

router.get("/students",  async(req,res) => {
    try{
         const studentsData = await Student.find();
         res.send(studentsData)
        }catch(e){
            res.status(400).send(e);
    }
})

module.exports = router
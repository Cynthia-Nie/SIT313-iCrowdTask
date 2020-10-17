const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./Task.js")
const cors = require("cors")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Cynthia:0000000@sit374.ntudk.mongodb.net/sit313?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


app.post('/register',(req,res) => {
    const task = new Task({
        TaskType: req.body.TaskType,
        TaskTitle : req.body.TaskTitle,
        TaskDescription : req.body.TaskDescription,
        ExpiryDate: req.body.ExpiryDate,
        TaskQuestion: req.body.TaskQuestion,
        OptionOne: req.body.OptionOne,
        OptionTwo: req.body.OptionTwo,
        OptionThree: req.body.OptionThree,
        Judgement: req.body.Judgement,
        isRequire: req.body.isRequire,
        Reward: req.body.Reward,
        Numbers:req.body.Numbers
    });

    task.save()
    .catch((err)=>console.log(err));
    res.json(('saved to db:' + task));
})



app.listen(8000,(req,res)=>{
    console.log("Server is running on port 8000")
})


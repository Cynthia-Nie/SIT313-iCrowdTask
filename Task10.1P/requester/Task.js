const mongoose = require("mongoose")
const validator = require("validator")
const server = require("./server.js")


const taskSchema = new mongoose.Schema(
    {
        TaskType: String,
        TaskTitle: String,
        TaskDescription:String,
        ExpiryDate: Date,
        TaskQuestion:String,
        OptionOne:String,
        OptionTwo:String,
        OptionThree:String,
        Judgement:String,
        isRequire:String,
        Reward:String,
        Numbers:String
    }
)


module.exports = mongoose.model("task", taskSchema);
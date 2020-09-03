const mongoose = require("mongoose")
const workerSchema = new mongoose.Schema(
    {
        worker_id: {
            type: String,
            required:'Please enter your id'
        },
        worker_name: {
            type: String,
            required:'Please enter your name'
        },
        worker_password: {
            type: String,
            required:'Please enter your password'
        },
        worker_address: {
            type: String,
            required:'Please enter your address'
        },
        worker_phone: {
            type: String,
            required:'Please enter your phone'
        },
        creation_date: {
            type: Date,
            default: Date.now
        }
    }
)
module.exports = mongoose.model("Worker", workerSchema);
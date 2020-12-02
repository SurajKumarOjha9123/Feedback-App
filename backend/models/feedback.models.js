const mongoose = require('mongoose');
const FeedbackSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Feedback',FeedbackSchema);
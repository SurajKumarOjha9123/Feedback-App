const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const feedbackRoute = require('./routes/feedback.routes');


const url = 'mongodb+srv://todoApp:9jf0IanTarFyYg8t@cluster0.penme.mongodb.net/feedback?retryWrites=true&w=majority'
const url2 = 'mongodb://127.0.0.1:27017/feedback'
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then((result) => {
    console.log('connected to server')
}).catch((error) => {
    console.log(error);
    console.log('Error while connecting')
})

app.use(cors());
app.use(express.json());
app.use('/api/feedback', feedbackRoute);

const PORT = 3000;
app.listen(PORT, console.log(`Server started at port: ${PORT}`))
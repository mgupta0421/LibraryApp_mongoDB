//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://user123:user123456789@cluster0.c5oh5.mongodb.net/local_library?retryWrites=true';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
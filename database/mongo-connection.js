const mongoose = require('mongoose')
mongoose.set('strictQuery','true')
// const mongoURL =process.env.mongoURL


mongoose.connect("mongodb://127.0.0.1:27017/sample-project", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

module.exports= mongoose.connection


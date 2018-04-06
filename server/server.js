const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL); 
mongoose.connection.on('connected', function() {
  console.log('mongo connect success');
})
// 类似于sql表，mongo里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String, require:true},
  age: {type:Number, require:true}
}))

// 新建app
const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>')
})
app.get('/data', function(req, res) {
  res.json({name:'imooc', type:'IT'})
})
app.listen(9093, function() {
  console.log('Node pp start at port 9093')
})

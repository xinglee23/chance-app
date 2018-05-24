const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const model = require('./model');
// const User = model.getModel('user');
const Chat = model.getModel('chat');
const app = express();
// work with express
const server = require('http').Server(app);
const io = require('socket.io')(server);

// 监听
io.on('connection', function(socket) {
  socket.on('sendmsg', function(data) {
    // 广播，发送消息到全局
    // io.emit('recvmsg', data);
    const {from, to, msg} = data;
    const chatid = [from, to].sort().join('_');
    Chat.create({chatid, from, to, content: msg}, function(err, doc) {
      // 与ES6 ...展开符作用一致
      io.emit('recvmsg', Object.assign({}, doc._doc));
    })
  })
})

const userRouter = require('./user');

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);
server.listen(9093, function() {
  console.log('Node app start at port 9093')
})

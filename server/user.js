const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const Chat = model.getModel('chat');
const _filter = {'pwd': 0, '_v': 0};

Router.get('/list', function(req, res) {
  const {type} = req.query;
  User.find({type}, function(err, doc) {
    return res.json({code:0, data:doc})
  })
})
Router.get('/getmsglist', function(req, res) {
  const userid = req.cookies.userid;
  User.find({}, function(e, userdoc) {
    let users = {};
    userdoc.forEach(v=>{
      users[v._id] = {name:v.user, avatar:v.avatar}
    })
    // Chat.find({'$or':[{from:user},{to:user}]}, function(err, doc) {
    //   if(!err) {
    //     return res.json({code: 0, msg: doc, users:users});
    //   }
    // }) 
  })
  // {'$or':[{from:user, to: user}]}
})
Router.post('/update', function(req, res) {
  const userid = req.cookies.userid;
  if(!userid) {
    return json.dumps({code: 1});
    // return JSON.dumps({code: 1});
  }
  const body = req.body;
  User.findByIdAndUpdate({_id: userid}, body, function(err, doc) {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code:0, data})
  })
})
Router.post('/login', function(req, res) {
  const {user, pwd} = req.body;
  User.findOne({user, pwd:md5Pwd(pwd)}, _filter, function(err, doc) {
    if(!doc) {
      return res.json({code: 1, msg: '用户名名或者密码错误'});
    }
    res.cookie('userid', doc._id);
    return res.json({code: 0, data: doc});
  })
})

Router.post('/register', function(req, res) {
  const {user, pwd, type} = req.body;
  User.findOne({user}, function(err, doc) {
    if(doc) {
      return res.json({code: 1, msg: '用户名重复'})
    }

    const userModel = new User({user, type, pwd: md5Pwd(pwd)});
    userModel.save(function(e, d) {
      if(e) {
        return res.json({code: 1, msg: '后端出错了'});
      }
      const {user, type, _id} = d;
      res.cookie('userid', _id);
      return res.json({code: 0, data: {user, type, _id}});
    });
  })
})
Router.get('/info', function(req, res) {
  const userid = res.cookies;
  if(!userid) {
    return res.json({code: 1});
  }
  User.findOne({_id: userid}, _filter, function(err, doc) {
    if(err) {
      return res.json({code:1, msg: '后后端出错了'});
    }
    if(doc) {
      return res.json({code: 0, data: doc});
    }
  })
})

function md5Pwd(pwd) {
  const salt = 'iooc_is_good_dsfijf938/847z^%$&*((*&^Yyy';
  return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;
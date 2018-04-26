import React from 'react';
import { NavBar } from 'antd-mobile';
import NavLinkbar from '../../component/navlink/navlink';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Boss from '../../component/boss/boss';
import Genius from '../../component/genius/genius';
import Msg from '../../component/msg/msg';
import User from '../../component/user/user';
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux';

@connect(
  state => state,
  {getMsgList, sendMsg, recvMsg}
)
class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  componentDidMount() {
    if(!this.props.chat.chatmsg.length) {
      this.props.getMsgList();
      this.props.recvMsg();
    }
  }

  render() {
    // const pathname = this.props.location.pathname;
    const pathname = '/boss';
    const user = this.props.user;
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: '牛人列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]

    console.log("navList find what" + JSON.stringify(navList.find(v=>v.path===pathname)))
    return (
      <div>
        <NavBar className='fixed-header' mode='dard'>{navList.find(v => v.path===pathname).title}</NavBar>
        <div style={{marginTop:45}}>
          <Switch>
            {navList.map(v => (
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>

        <NavLinkbar data={navList}></NavLinkbar>
      </div>
    )
  }
}

export default Dashboard;
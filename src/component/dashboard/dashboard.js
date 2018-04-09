import React from 'react';
import { NavBar } from 'antd-mobile';
import NavLinkbar from '../../component/navlink/navlink';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Boss from '../../component/boss/boss';
import Genius from '../../component/genius/genius';
import User from '../../component/user/user';

function Msg() {
  return (
    <div>牛人列表</div>
  )
}

@connect(
  state =>  state
)
class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  render() {
    const {pathname} = this.props.location;
    console.log("path is " + JSON.stringify(this.props.location))
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
    return (
      <div>
        <NavBar className='fixed-header' mode='dark'>{navList.find(v => v.path===pathname).title}</NavBar>
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
import React from 'react'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import browserCookie from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import { logoutSubmit } from '../../redux/user.redux'

@connect (
  state => state.user,
  { logoutSubmit }
)
class User extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log("this is what")
    const alert = Modal.alert; 
    alert('温馨提示', '确认退出登陆吗？', [
      { text: '取消'},
      { text: '确认', onPress: () => {
        browserCookie.erase('userid');
        this.props.logoutSubmit();
      }}
    ])
  }
  render() {
    const props = this.props;
    const Item = List.Item;
    const Brief = Item.Brief;
  
    return props.user ? (
      <div>
        <Result                 
          img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50}} alt="" />}
          title={this.props.user}
          message={props.type==='boss' ? props.company : props.desc}
          />
        <List renderHeader={() => '简介'}>
          <Item multipleLine>
            {props.title}
            {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
            {props.money?<Brief>薪资:{props.money}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item style={{zIndex:100}} onClick={this.logout}>退出登陆</Item>
        </List>
      </div>
    ) : <Redirect to={props.redirectTo} />
  }
}

export default User
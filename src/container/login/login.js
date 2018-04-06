import React from 'react'
import Logo from '../../component/logo/logo';
import { Button, WhiteSpace, WingBlank, InputItem, List } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.sate = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  register() {
    this.props.history.push('./register')
  }
  handleLogin() {
    console.log(this.props)
    this.props.login(this.state);
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo/>
        <h2>登陆页</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange={v=>this.handleChange('user', v)}
            >用户</InputItem>
            <InputItem
              type='password'
              onChange={v=>this.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type="primary">登陆</Button><WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

export default Login
import React from 'react'
import Logo from '../../component/logo/logo';
import { Button, WhiteSpace, WingBlank, InputItem, List } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import imoocForm from '../../component/imooc.form/imooc.form';

@connect(
  state => state.user,
  {login}
)
@imoocForm
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  register() {
    this.props.history.push('./register')
  }
  handleLogin() {
    this.props.login(this.props.state);
  }
  render() {
    return (
      <div>
        {(this.props.redirectTo&&this.props.redirectTo!=='/login') ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo/>
        <h2>登陆页</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange={v=>this.props.handleChange('user', v)}
            >用户</InputItem>
            <InputItem
              type='password'
              onChange={v=>this.props.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登陆</Button><WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

export default Login
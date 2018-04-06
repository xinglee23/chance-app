import React from 'react'
import Logo from '../../component/logo/logo.js'
import { Button, WhiteSpace, WingBlank, List, InputItem, Radio} from 'antd-mobile'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/user.redux';
// import 'antd-mobile/dist/antd-mobile.css';

@connect(
  state => state.user,
  {register}
)

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    console.log(JSON.stringify(this.state) + '123')
    this.props.register(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo/>
        <h2>注册</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange = {(v) => this.handleChange('user', v)}
            >用户名</InputItem>
            <InputItem
              type='password'
              onChange = {(v) => this.handleChange('pwd', v)}
            >密码</InputItem>
            <InputItem
              type='password'
              onChange = {(v) => this.handleChange('repeatpwd', v)}
            >确认密码</InputItem>
          </List>
          <RadioItem 
            checked={this.state.type === 'genius'}
            onClick = {(v) => this.handleChange('type', 'genius')}>
            牛人
          </RadioItem>
          <RadioItem 
            checked={this.state.type === 'boss'}
            onClick = {(v) => this.handleChange('type', 'boss')}>
            Boss
          </RadioItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>注册</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

export default Register
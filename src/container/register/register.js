import React from 'react'
import Logo from '../../component/logo/logo.js'
import { Button, WhiteSpace, WingBlank, List, InputItem, Radio} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius'
    }
  }
  render() {
    console.log("is what " + this.state.type)
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo/>
        <h2>注册</h2>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
          </List>
          <RadioItem checked={this.state.type == 'genius'}>
            牛人
          </RadioItem>
          <RadioItem checked={this.state.type == 'boss'}>
            boss
          </RadioItem>
          <Button type="primary">注册</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

export default Register
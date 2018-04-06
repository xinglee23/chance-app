import React from 'react'
import Logo from '../../component/logo/logo'
// import { Button, List, WhiteSpace, WingBlank} from 'antd-mobile';
import { Button, WhiteSpace, WingBlank, InputItem } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this);
  }
  register() {
    this.props.history.push('./register')
  }
  render() {
    return (
      <div>
        <Logo/>
        <h2>登陆页</h2>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
          </List>
          <Button type="primary">登陆</Button><WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

export default Login
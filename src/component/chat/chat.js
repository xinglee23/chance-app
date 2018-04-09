import React from 'react';
// import io from 'socket.io-client';
import { connect } from 'react-redux';
import { List, InputItem, NavBar } from 'anti-mobile';
import { getmsgList, sendMsg, recvMsg } from '../../redux/chat.redux';

@connect(
  state=>state,
  {getmsgList, sendMsg, recvMsg}
)
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.getmsgList();
    this.props.recvMsg();
    // const socket = io('ws://loaclhost:9093');
    // socket.on('recvmsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // })
  }
  handleSubmit() {
    // socket.emit('senfmsg', {text:this.state.text});
    const from = this.props.user._id;
    const to = this.props.match.params.user;
    const msg = this.state.text;
    this.props.sendMsg({from, to, msg});
    this.setState({text:''});
  }
  render() {
    const user = this.props.match.params.user;
    const Item = List.Item;
    return (
      <div id="chat-page">
        <NavBar mode='dark'>
          {this.props.match.params.user}
        </NavBar>
        {this.props.chat.chatmsg.map(v=>{
          return v.from === user ? (
            <List key={v._id}>
              <Item
                {/* thumb={} */}
              >{v.content}</Item>
            </List>
          ) : (
            <List key={v._id}>
              <Item 
                extra={'avatar'}
                className='chat-me'
              >{v.content}</Item>
            </List>
          )
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholer="请输入"
              value={this.state.text}
              onchange={v=>{
                this.setState({text:v})}}
                extra={<span onClick={() => this.handleSubmit}>发送</span>}>
            </InputItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Chat;
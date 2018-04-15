import React from 'react';
import { connect } from 'react-redux';
import { List } from 'anti-mobile';

@connect(
  state => state
)
class Msg extends React.Component{
  getLast(arr) {
    return arr[arr.length-1]
  }
  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    const userid = this.props.user._id
    const userinfo = this.props.chat.users;
    if(!this.props.chat.chatmsg.length) {
      return;
    }
    const msgGroup = {};
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push(v);
    })
    return (
      <div>  
        {chatList.map(v=>{
          const lastItem = this.getLast(v);
          const targetId = (v.from === userid) ? v.to : v.from;
          if(!userinfo[targetId]) {
            return null;
          }
          <List key={lastItem._id}>
            <Item 
              thumb={require('../img/${userinfo[targetId].avatar}')}
            />
            {lastItem.content}
            <Brief>{userinfo[targetId].name}</Brief>
          </List>
          })}
        <h2>消息列表</h2>
      </div>
    )
  }
}

export default Msg;
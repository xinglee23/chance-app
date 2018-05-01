import React from 'react';
import { connect } from 'react-redux';
import { List, Badge } from 'antd-mobile';

@connect(
  state => state
)
class Msg extends React.Component{
  getLast(arr) {
    return arr[arr.length - 1]
  }
  render() {
    const msgGroup = {};
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup)
    .sort((a, b) => {
      const a_last = this.getLast(a).create_time;
      const b_last = this.getLast(b).create_time;
      return b_last - a_last;
    })

    const Item = List.Item;
    const Brief = Item.Brief;
    const userid = this.props.user._id
    const userinfo = this.props.chat.users;

    return (
      /* thumb={require('../../img/${userinfo[targetId].avatar}.png')} */
      <div>  
        {chatList.map(v => {
          const lastItem = this.getLast(v);
          const targetId = lastItem.from === userid ? lastItem.to : lastItem.from;
          const unreadNum = v.filter(v=>!v.read&&v.to===userid).length;
          console.log("this is what" + targetId)
          if(!userinfo[targetId]) {
            return null;
          }
          <List key={lastItem._id}>
            <Item
              extra={<Badge text={unreadNum}></Badge>}
              style={{zIndex: 1}}
              thumb={require('../img/boy.png')}
              onClick={() => {
                this.props.history.push(`/chat/${targetId}`)
              }}
              arrow="horizontal"
            >
              {lastItem.content}
              <Brief>{userinfo[targetId].name}</Brief>
            </Item>
          </List>
          })}
      </div>
    )
  }
}

export default Msg;
import React from 'react';
import propTypes from 'prop-types';
import { WingBlank, WhiteSpace, Card} from 'antd-mobile';

class UserCard extends React.Component {
  static propTypes = {
    selectAvatar: propTypes.func.isRequired
  }

  render() {
    return (
      <WingBlank>
        <WhiteSpace/>
          {this.state.userlist.map(v => (
            v.avatar ? <Card key={v._id}>
              <Card.Header 
                title={v.user}
                thumb={require(`../img/${v.avatar}.png`)}
                extra={<span>{v.title}</span>}>
              </Card.Header>
              <Card.Body>
              {v.type==='boss' ? <div>公司:{v.company}</div> : null}
                {v.desc.split('\n').map(v => (
                  <div key={v}>{v}</div>
                ))}
                {v.type==='boss' ? <div>薪资:{v.money}</div> : null}
              </Card.Body>
            </Card> : null
        ))}
      </WingBlank>
    )
  }
}

export default UserCard;
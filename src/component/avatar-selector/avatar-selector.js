import React from 'react';
import propTypes from 'prop-types';
import { Grid, List } from 'antd-mobile';

class AvatarSelector extends React.Component {
  // 属性验证
  static propTypes = {
    selectAvatar: propTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
                        .split(",")
                        .map(v => ({
                          icon: require(`../img/${v}.png`),
                          text: v
                        }));
    const gridHeader = this.state.icon
                       ? (<div>
                            <span>已选择头像</span>
                            <img style={{width:20}} src={this.state.icon} alt="" />
                          </div>)
                        : '请选择头像';
    return (
      <div>
        <List>
          {gridHeader}
          <Grid 
            data={avatarList} 
            columnNum={5}
            onClick={elm => {
              this.setState(elm);
              this.props.selectAvatar(elm.text);
            }}/>
        </List>
      </div>
    )
  }
}

export default AvatarSelector
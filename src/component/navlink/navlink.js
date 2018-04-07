import React from 'react';
import propTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

@withRouter
class NavLinkbar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  static propTypes = {
    data: propTypes.array.isRequired
  }
  render() {
    const navList = this.props.data.fliter(v => !v.hide);
    const {pathname} = this.props.location;
    return (
      <div>
        <TabBar>
          {navList.map(v => (
            <TabBar.Item
              key={v.path}
              title={v.text}
              icon={{uri: require(`./img/${v.icon}.png`)}}
              selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
              selected={pathname === v.path}
              onPress={() => {
                this.props.history.push(v.path)
              }}
            >
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    )
  }
}

export default NavLinkbar;
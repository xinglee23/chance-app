import React from 'react';

class NavLinkBar extends React.Component {
  static propType = {
    data: propType.array.isRequired
  }
  render() {
    const navList = this.props.data.fliter(v => !v.hiede)
    return (
      <div>底部组件</div>
    )
  }
}

export default NavLinkbar



class Hello extends React.Component{
  render() {
      
  }
}
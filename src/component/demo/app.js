import React from 'react';
import { connect } from 'react-redux';
import { addGUN, removeGUN, addGunAsync } from './index.redux';
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const num = this.props.num;
    const addGUN = this.props.addGUN;
    const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <h1>now have guns${num}</h1>
        <button onClick={addGUN}>apply weapons</button>
        <button onClick={removeGUN}>remove weapons</button>
        <button onClick={addGunAsync}>wait two days</button>
      </div>
    )
  }
}

const mapStatetuProps = (state) => {
  return {num: state}
}
const actionCreators = {addGUN, removeGUN, addGunAsync}
App = connect()(mapStatetuProps, actionCreators)

export default App;
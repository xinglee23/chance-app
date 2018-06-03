import React from 'react';

class ResultsPages extends React.Component {
  componentDidMount() {
    this.props.getResults();
  }
  render() {
    if(this.props.results) {
      return <List results={this.props.resultd} />
    } else {
      return <LoadingScreen />
    }
  }
}

const theLogoIsClick = () => alert('Clicked')

<Logo onClick={theLogoIsClicked} />

<input type='text' onChange={event.target.value}
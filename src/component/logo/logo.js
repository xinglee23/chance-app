import React from 'react'
import LogoImg from './logo.jpg'
import './logo.css'

class Logo extends React.Component {
  render() {
    return (
      <div className="img-container">
        <img src={LogoImg} />
     </div>
    )
  }
}

export default Logo
import React from 'react';

export default class Keypad extends React.Component {

  handleOnKeyUp = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={this.handleOnKeyUp}/>
    )
  }
}

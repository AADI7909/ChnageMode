// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  onChangeMode = () => {
    this.setState(PrevState => ({isDarkMode: !PrevState.isDarkMode}))
  }

  btnText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  headingColor = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'DarkHeading' : 'LightHeading'
  }

  ModeBgColor = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Bg-light-Mode-container' : 'Bg-Dark-Mode-container'
  }

  render() {
    return (
      <div className="main-container">
        <div className={this.ModeBgColor()}>
          <h1 className={this.headingColor()}>Click To Change Mode</h1>
          <button onClick={this.onChangeMode}>{this.btnText()}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

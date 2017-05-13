import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  componentWillMount () {
    injectTapEventPlugin()
  }

  render () {
    return (
      <div>Hello World</div>
    )
  }
}

export default App

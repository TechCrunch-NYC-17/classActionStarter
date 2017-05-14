import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LawsuitsList from './LawSuitsList';

class App extends Component {
  componentWillMount () {
    injectTapEventPlugin()
  }

  render () {
    return (
      <div>Hello World
        <LawsuitsList />
      </div>
    )
  }
}

export default App

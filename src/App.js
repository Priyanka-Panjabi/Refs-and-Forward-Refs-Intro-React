//Refs to import dom elements within react elements

import React, { Component } from 'react'
import ReactRefs from './ReactRefs'

export class App extends Component {
  render() {
    return (
      <div>
        < ReactRefs/>
      </div>
    )
  }
}

export default App


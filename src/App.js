import React from 'react'
import './App.css';

import Title from './components/Title'
import Form from './components/Form'
import DisplayItems from './components/DisplayItems'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Title />
        <Form />
        <DisplayItems />
      </div>
    )
  }

}

export default App;

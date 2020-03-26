import React, {Component} from 'react'
import './css/App.css'
import './css/Mobile.css'
import Form from './Form.js'
import Peter from "./img/petr.png";

class App extends Component{
  render() {
    return (
      <body>
        <div className="Form">
          <Form />
        </div>
        <img className="peter" src={Peter}></img>
      </body>
      
    )
  }
  
}

export default App
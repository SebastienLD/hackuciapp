import React, {Component} from 'react';
import axios from 'axios';
import './css/App.css';
import './css/Mobile.css';
import './css/Tablets.css'
import App from './App';


const initialState = {
    username: '',
    email: '',
    funfact: '',
}

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
      }
    
      handleUsernameChange = (event) => {
        this.setState({
          username: event.target.value
        })
      }
      handleEmailChange = (event) => {
        this.setState({
          email: event.target.value
        })
      }
      handleFFactChange = (event) => {
        this.setState({
          funfact: event.target.value
        })
      }
      
      validate = () => {
        for (var key of Object.keys(this.state)){
          if (this.state[key] === ""){
            return false;
          };
        };
        return true;
      };
    
      handleSubmit = event => {
          event.preventDefault()
          const isValid = this.validate();
          console.log(isValid);
          if (isValid){
            axios.get('https://hack-uci-test-endpoint.herokuapp.com/', this.state)
            .then((response) => {
              console.log(response.data)
            });
            alert("Submit Successful")
            this.setState(initialState)
          }
          else{
            alert("All feilds must be filled out before submiting.")
          }
          
      };
    
      render() {
        return (
          <form  action="https://hack-uci-test-endpoint.herokuapp.com/" 
          onSubmit = {this.handleSubmit}>
            <h1 className="header">Hack UCI Application</h1> 
            <div className = 'lInput'>  
                <label>Name</label><br></br>
                <input 
                type = 'text'
                placeholder = 'Name'
                value={this.state.username}
                onChange={this.handleUsernameChange}
                />
            </div>
            <div className = 'lInput'>
                <label>Email</label><br></br>
                <input 
                type = 'email' 
                placeholder = 'Email'
                value={this.state.email}
                onChange={this.handleEmailChange}
                />
            </div>
            <div className = 'lInput'>
                <label>Fun Fact</label><br></br>
                <textarea 
                className = 'ffact'
                rows = '3'
                placeholder = 'Fun Fact'
                value={this.state.funfact}
                onChange={this.handleFFactChange}>
                </textarea> 
            </div>   
            <button type="submit">Submit</button>
          </form>
        )
      }
}

export default Form
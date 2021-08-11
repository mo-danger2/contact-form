import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    name: "",
    email: "",
    number: "",
    about: ""
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  addInfo = (evt) => {
    // evt.preventDefault();
    fetch("http://localhost:3000/api/forms", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: this.state.name, 
        email: this.state.email, 
        number: this.state.number, 
        about: this.state.about}) // <-- send this object to server
      }) 
      .then(response => response.json()) // <-- decode server response
      .then(serverData => {console.log("Success:", serverData)}) // <-- log serverData if success
      .catch(error => {console.error("Error:", error)})
  }


  render() {
  return (
    <div className="App">
      <form>
        <label>
          name: 
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          email: 
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          number: 
          <input name="number" type="text" value={this.state.number} onChange={this.handleChange} />
        </label>
        <label>
          about: 
          <input name="about" type="text" value={this.state.about} onChange={this.handleChange} className="about"/>
        </label>
        <button onClick={this.addInfo}>Enter</button>
      </form>
    </div>
  );
}
}

export default App;
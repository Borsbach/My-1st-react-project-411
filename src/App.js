import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./firstComponent";
import SecondComponent from './secondComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOn: false,
      input: "",
      input2: "",
      cars: [], 
      house: []
    };
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = event => {
    this.setState({ input: event.target.value });
  };
  
  inputUpdate2 = event => {
    this.setState({ input2: event.target.value });
  };

  formSubmit = event => {
    event.preventDefault();
    console.log("***THIS IS STATE***", this.state.cars);
    this.setState({
      cars: [...this.state.cars, this.state.input],
      input: ""
    });
  };
  
  formSubmit2 = event => {
    event.preventDefault();
    console.log("***THIS IS STATE***", this.state.house);
    this.setState({
      house: [...this.state.house, this.state.input2],
      input2: ""
    });
  };

  render() {
    // console.log('***THIS IS STATE***', this.state.isOn)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Alex's 1st react project</h1>
          <FirstComponent items={this.state.cars} />
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpdate} />
            {/* <button onClick={this.toggle}>{this.state.isOn ? "ON" : "OFF"}</button> */}
            <button>Submit Car</button>
          </form>
          {/* <ul>
        {this.state.items.map((item, index) => {
          return <li key={index}>{this.state.items[index]}</li>
        })}
        </ul> */}
          <SecondComponent items={this.state.house}/>
          <form onSubmit={this.formSubmit2}>
          <input value={this.state.input2} onChange={this.inputUpdate2}/> 
          {/* <button onClick={this.toggle}>{this.state.isOn ? "ON" : "OFF"}</button> */}
          <button>Submit House</button>
        </form>
        </header>
      </div>
    );
  }
}

export default App;

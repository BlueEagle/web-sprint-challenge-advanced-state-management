import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs, postSmurfs } from '../actions'
import Smurf from './Smurf'
import "./App.css";

const initialState = {
  name: '',
  age: '',
  height: ''
}

class App extends Component {
  state = initialState

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  handleChanges = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  addSmurf = e => {
    this.props.postSmurfs(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <h2>Add Smurfs</h2>
        <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChanges}></input></label>
        <label>Age: <input type="text" name="age" value={this.state.age} onChange={this.handleChanges}></input></label>
        <label>Height: <input type="text" name="height" value={this.state.height} onChange={this.handleChanges}></input></label>
        <button onClick={this.addSmurf}>Add smurf</button>

        <h2>Smurf Village</h2>
        {this.props.data && this.props.data.length === 1 && <Smurf name={this.props.data[0].name} age={this.props.data[0].age} height={this.props.data[0].height} />}
        {this.props.data && this.props.data.length > 1 && this.props.data.map(smurf => <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />)}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    isLoading: state.isLoading,
    data: state.smurfData,
    error: state.error
  }
)

export default connect(
  mapStateToProps,
  { fetchSmurfs, postSmurfs }
)(App)

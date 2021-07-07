import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs, postSmurfs } from '../actions'

import { AppBar, Button, TextField, Paper } from '@material-ui/core';
import styled from 'styled-components'
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
    e.preventDefault()
    this.props.postSmurfs(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </AppBar>

        <StyledPaper elevation={5}>
          <h2>Add Smurfs</h2>
          <form onSubmit={this.addSmurf}>
            <TextField label="Name" type="text" name="name" value={this.state.name} onChange={this.handleChanges} />
            <TextField label="Age" type="text" name="age" value={this.state.age} onChange={this.handleChanges}/>
            <TextField label="Height" type="text" name="height" value={this.state.height} onChange={this.handleChanges}/>
            <StyledButton variant="contained" color="primary" type="sybmit">Add smurf</StyledButton>
          </form>
        </StyledPaper>

        <h2>Smurf Village</h2>
        {this.props.isLoading && <p>The smurfs database is loading...</p>}
        {this.props.error && <p className="error">{this.props.error}</p>}
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

const StyledPaper = styled(Paper)`
  width: 60%;
  margin: auto;
  margin-top: 2%;
  padding: 1%;

  form {
    margin: auto;
    width: 40%;
    display: flex;
    flex-direction: column;

    * {
      padding-top: 1%;
      padding-bottom: 1%;
    }
  }
`
const StyledButton = styled(Button)`
  margin-top: 1rem;
`
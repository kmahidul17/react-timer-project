import React, { Component } from 'react';
import Timer from './components/Timer';
import ButtonController from './components/ButtonController';
import ResetButton from './components/ResetButtons'
import './App.css';

class App extends Component {

  state = {
    timer: 0,
    paused: true,

  };


  tick = () => {
    this.setState({
      timer: this.state.timer + 1
    })
  }


  startTimer = () => {
    this.interval = setInterval(this.tick, 1000);
    this.setState({
      paused: false
    })
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ paused: true });
  }
  
  onClickHandler = () => {

    if(this.state.paused){
      this.startTimer()
    }
    else{

      this.stopTimer()
    }
    
  }
  
onClickreset = () => {
  this.setState({timer: 0 , paused: true})
  clearInterval(this.interval)
}




  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Timer time={this.state.timer} />
          <ButtonController paused={this.state.paused}  onhandler={this.onClickHandler} />
          <ResetButton onClickreset={this.onClickreset}/>

        </header>
      </div>
    );

  }


}

export default App;


import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';

import { Result, SearchBox } from './components/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_info: null,
            summoner_name: 'default'
        };

        this.handleSummonerChange = this.handleSummonerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSummonerChange(event) {
        this.setState({summoner_name: event.target.summoner_name});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.summoner_name);
        event.preventDefault();
    }

    render() {
        if (this.state.match_info === null) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>LoL<span>FY</span></h1>
                        <p>Mini LoL Stat Application. Powered by React and NodeJS.</p>
                    </div>

                    <SearchBox summoner_name="Mark and Sweep" handleSummonerChange={this.handleSummonerChange} handSubmit={this.handleSubmit}/>

                </div>
            );
        } else {
            return (
                <Result/>
            )
        }
    }
}

export default App;

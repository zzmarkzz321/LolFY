import React, { Component } from 'react';
import './styles/App.css';
import logo from './logo.svg';

import { Result, SearchBox } from './components/'
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_info: false,
            summoner_name: '',
            outcome: '',
            gameLength: '',
            summonerName: '',
            summonerSpells: [],
            champion: '',
            kda: '',
            items: [],
            level: '',
            creepScore: '',
            creepScorePerMinute: ''
        };

        this._handleSummonerNameChange = this._handleSummonerNameChange.bind(this);
        this._handleSummonerSearchSubmit = this._handleSummonerSearchSubmit.bind(this);
        this._resetState = this._resetState.bind(this);
    }

    _handleSummonerNameChange(summoner_name) {
        this.setState({
            summoner_name
        })
    }

    _handleSummonerSearchSubmit() {
        Axios.get('/riot/api/mock/' + this.state.summoner_name)
            .then((result) => {

                console.log('****');
                console.log(result.data);

                let resultData = result.data;

                this.setState({
                    match_info: true,
                    champion: resultData.champion,
                    summoner_name: resultData.summonerName,
                    outcome: resultData.outcome,
                    gameLength: resultData.gameLength,
                    summonerName: resultData.summonerName,
                    summonerSpells: [...resultData.summonerSpells],
                    kda: resultData.kda,
                    items: [...resultData.items],
                    level: resultData.level,
                    creepScore: resultData.creepScore,
                    creepScorePerMinute: resultData.creepScorePerMinute
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    _resetState() {
        this.setState({
            match_info: false,
            summoner_name: ''
        });
    }

    render() {
        if (!this.state.match_info) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>LoL<span>FY</span></h1>
                        <p>Mini LoL Stat Application. Powered by React and NodeJS.</p>
                    </div>

                    <SearchBox summoner_name={this.state.summoner_name} _handleSummonerSearchSubmit={this._handleSummonerSearchSubmit} _handleSummonerNameChange={this._handleSummonerNameChange}/>
                </div>
            );
        } else {
            return (
                <Result _resetState={this._resetState} _data={this.state}/>
            )
        }

    }
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
import Axios from 'axios';

import { Result, Home } from './components/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_info: false,
            summoner_name: 'default',
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

        this._onSubmit = this._onSubmit.bind(this);
        this._resetState = this._resetState.bind(this);
    }

    _onChange(event) {
        this.setState({
            summoner_name: event.target.summoner_name
        });
    }

    _onSubmit(event) {
        console.log(event.target.value);
        event.preventDefault();
        Axios.get('/riot/api/mock/Mark%20and%20Sweep')
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
        });
    }

    render() {
        if (!this.state.match_info) {
            return (
                <Home _onSubmit={this._onSubmit} _onChange={this._onChange}/>
            );
        } else {
            return (
                <Result _resetState={this._resetState} _data={this.state}/>
            )
        }

    }
}

export default App;

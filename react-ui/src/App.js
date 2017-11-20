import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';

import { Input } from 'semantic-ui-react'

const SummonerSearchBox = () => (
    <Input
        icon={{ name: 'search', circular: true, link: true }}
        placeholder='Search...'
        size='big'
    />
);

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            found: false,
            match_info: {},
            results: 20
        }
    }



    render() {
        return (
            <div>
                <h1>RESULTS PAGE</h1>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_info: null
        };
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

                    <SummonerSearchBox/>

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

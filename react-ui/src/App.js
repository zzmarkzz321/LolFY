import React, { Component } from 'react';
import './styles/App.css';
import Axios from 'axios';

import { Result, Home } from './components/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_info: null,
            summoner_name: 'default'
        };

        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(event) {
        event.preventDefault();
        this.setState({
            match_info: 'test'
        });
    }

    render() {
        // if (this.state.match_info === null) {
        //     return (
        //         <Home _onSubmit={this._onSubmit}/>
        //     );
        // } else {
        //     return (
        //         <Result />
        //     )
        // }
        return (
            <Result/>
        )

    }
}

export default App;

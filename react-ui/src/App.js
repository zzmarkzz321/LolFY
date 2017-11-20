import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_info: null,
            fetching: true,
            val: 1
        };
    }

    componentDidMount() {
        Axios.get('/riot/api/MarkandSweep')
            .then(response => {
                this.setState({
                    match_info: response.data.match_info,
                    fetching: false
                });
                console.log(response)
            })
            .catch(err => {
                this.setState({
                    match_info: err,
                    fetching: false,
                    val: 1
                })
            })
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    {'This is an important message to the community'}
                    <br/>
                </p>
                <p className="App-intro">
                    {this.state.fetching
                        ? 'Fetching message from API'
                        : this.state.match_info}
                </p>
            </div>
        );
    }
}

export default App;

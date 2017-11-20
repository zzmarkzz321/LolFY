import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';
import {Navigation} from "./components/standard-nav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            fetching: true,
            val: 1
        };
    }

    componentDidMount() {
        Axios.get('/api?val=' + this.state.val)
            .then(response => {
                this.setState({
                    message: response.data.message,
                    fetching: false
                })
            })
            .catch(err => {
                this.setState({
                    message: err,
                    fetching: false,
                    val: 1
                })
            })
    }

    render() {
        return (
            <div className="App">

                <Navigation fn={this.changeVal}/>

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
                        : this.state.message}
                </p>
            </div>
        );
    }
}

export default App;

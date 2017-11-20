import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {Navigation} from "./Components/standard-nav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            fetching: true,
            val: 1
        };

        this.changeVal = this.changeVal.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
    }

    componentDidMount() {
        Axios.get('/api?val=' + this.state.val)
            .then(response => {
                this.setState({
                    message: response.data.message,
                    fetching: false,
                    val: 1
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

    changeVal() {
        this.setState({
            val: (this.state.val < 3) ? this.state.val + 1 : 1
        });
        console.log(this.state.val);
        this.changeMessage();
    }

    changeMessage() {
        console.log('changeMessage');
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
                    fetching: true
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

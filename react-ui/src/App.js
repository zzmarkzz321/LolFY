import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';

import { Input } from 'semantic-ui-react'

const InputExampleIconProps = () => (
    <Input
        icon={{ name: 'search', circular: true, link: true }}
        placeholder='Search...'
        size='big'
    />
);


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
        // Axios.get('/riot/api/MarkandSweep')
        //     .then(response => {
        //         this.setState({
        //             match_info: response.data.match_info,
        //             fetching: false
        //         });
        //         console.log(response)
        //     })
        //     .catch(err => {
        //         this.setState({
        //             match_info: err,
        //             fetching: false,
        //             val: 1
        //         })
        //     })
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>LoL<span>FY</span></h1>
                    <p>Mini LoL Stat Application. Powered by React and NodeJS.</p>
                </div>

                <InputExampleIconProps/>

            </div>
        );
    }
}

export default App;

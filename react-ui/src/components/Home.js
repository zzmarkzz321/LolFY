import React from 'react';
import { SearchBox } from './SummonerSearchBox';
import logo from '../logo.svg';

const HomeComponent = (props) => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>LoL<span>FY</span></h1>
            <p>Mini LoL Stat Application. Powered by React and NodeJS.</p>
        </div>

        <SearchBox summoner_name="Mark and Sweep" _onSubmit={props._onSubmit} _onChange={props._onChange}/>
    </div>
);

export const Home = HomeComponent;
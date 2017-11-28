import React, { Component } from 'react';


export class SearchBox extends Component {
    constructor(props) {
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        this.props._handleSummonerNameChange(event.target.value);
    }

    _onSubmit(event) {
        event.preventDefault();
        this.props._handleSummonerSearchSubmit()
    }

    render() {
        return (
            <form onSubmit={this._onSubmit} >
                <div className='ui big icon input'>
                    <input type='text' placeholder='Search...' value={this.props.summoner_name} onChange={this._onChange}/>
                    <button type='submit'>
                        <i className='search link icon'></i>
                    </button>
                </div>
            </form>
        );
    }
}
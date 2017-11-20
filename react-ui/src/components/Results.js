import React, { Component } from 'react';

class ResultComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

export const Result = ResultComponent;
import React from 'react';

const SummonerSearchBox = (props) => (
    <form onSubmit={props._onSubmit} >
        <div className='ui big icon input'>
            <input type='text' placeholder='Search...'/>
            <button type='submit'>
                <i className='search link icon'></i>
            </button>
        </div>
    </form>
);

export const SearchBox = SummonerSearchBox;

import React from 'react';
import { Input } from 'semantic-ui-react'

const SummonerSearchBox = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Input
            icon={{ name: 'search', circular: true, link: true}}
            placeholder={props.summoner_name}
            size='big'
            value={props.summoner_name}
            onChange={props.handleSummonerChange}
        />

        <input type="submit" value="Submit" />
    </form>
);

export const SearchBox = SummonerSearchBox;
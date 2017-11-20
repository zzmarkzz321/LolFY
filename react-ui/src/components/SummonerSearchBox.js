import React from 'react';
import { Input } from 'semantic-ui-react'

const SummonerSearchBox = (props) => (
    <form onSubmit={props._onSubmit} >
        <Input
            icon={{ name: 'search', circular: true, link: true}}
            placeholder={props.summoner_name}
            size='big'
        />

        <input type="submit" value="Submit" />

    </form>
);

export const SearchBox = SummonerSearchBox;
import React from 'react';

// const SummonerCreep = () => (
//
// );

const SummonerRunes = (props) => (
    <div className="Summoner-Runes">

        {}
        <div className="Rune">
            <h3>Rune 1</h3>
        </div>
        <div className="Rune">
            <h3>Rune 2</h3>
        </div>
    </div>
);

const SummonerSpells = (props) => (
    <div className="Summoner-Spells">
        {
            props.spells.map((spell, i) => {
                return (
                    <div key={i} className="Spell">
                        <h3>{spell}</h3>
                    </div>
                )
            })
        }
    </div>
);

const ChampionLevel = (props) => (
    <h2>{props.level}</h2>
);

const ChampionPic = (props) => (
    <h2>
        Insert champion pic here
    </h2>
);

const ChampionCard = (props) => (
    <div>
        <ChampionPic/>

        <div className="App-header">
            <h2>{props._data.champion}</h2>
            <p>{props._data.summoner_name}</p>
        </div>

        <div className="SummonerDetails">
            <SummonerSpells spells={props._data.summonerSpells}/>
            <ChampionLevel level={props._data.level}/>
            <SummonerRunes/>
        </div>
    </div>
);

const MainInfoComponent = (props) => (
    <div>
        <ChampionCard _data={props._data}/>
    </div>
);

// const SubInfoComponent = () => (
//
// );

const ResultComponent = (props) => (
    <div className="App">
        <MainInfoComponent _data={props._data}/>
        <button onClick={props._resetState}>Reset</button>
    </div>
);

export const Result = ResultComponent;
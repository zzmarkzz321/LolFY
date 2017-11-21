'use strict';

const common = require('../../common/common');
const Axios = require('axios');

const baseURI = 'https://na1.api.riotgames.com';
const RIOT_API_KEY = process.env.RIOT_API;

function RiotService() {
}

/**
 * Formats all the data from the RIOT APIs and returns a json with the required info
 * @private
 */
const _formatMatchData = (recentMatchDetails) => {

    let matchInfoSchema = {
        outcome: '',
        gameLength: '',
        summonerName: '',
        summonerSpells: '',
        champion: '',
        kda: '',
        items: '',
        level: '',
        creepScore: '',
        creepScorePerMinute: ''
    };

    //TODO replace after testing
    // return matchInfoSchema;
    return recentMatchDetails;
};

/**
 * Grabs the champion image
 * @private
 */
const _getChamponImage = (championID) => {

};

/**
 * Gets all recent matches affiliated with the summoner ID
 * @private
 */
const _getRecentMatches = (summoner) => {
    let url = '/lol/match/v3/matchlists/by-account/' + summoner.accountID + '/recent?api_key=';

    // Make and API call to
    return new Promise((resolve, reject) => {
        Axios.get(baseURI + url + RIOT_API_KEY)
            .then((response) => {
                resolve({'matches': response.data.matches});
            })
            .catch((err) => {
                reject({err});
            })
    });
};

/**
 * Grabs the summoner ID from the given summoner name
 * @private
 */
const _getSummonerId = (summonerName) => {
    // Make a RIOT API Call to Summoner-v3
    let url = '/lol/summoner/v3/summoners/by-name/Mark%20and%20Sweep?api_key=';

    return new Promise((resolve, reject) => {
        Axios.get(baseURI + url + RIOT_API_KEY)
            .then((response) => {
                resolve({'accountID': response.data.accountId, 'summonerName': summonerName});
            })
            .catch((err) => {
                reject(err);
            })
    });
};

/**
 * Sets up all the RIOT API calls and formats the response data from them
 *
 * @param summonerName
 * @return Promise or all match id's from the last 20 games
 */
RiotService.prototype.getRecentMatchHistory = (summonerName) => {
    /*
        TODO santize the input
        TODO perform a check if the data has been cached {summonerName: {a json of already formatted data}}
        TODO grab the information async
     */

    // Perform a check on the cache to see if that summoner name has been looked up (use a map)

    // Sanitize that input here. return error if it fails sanity check

    // Async calls to the APIs
    return new Promise((resolve, reject) => {
        _getSummonerId(summonerName)
            .then((summonerID) => {
                return _getRecentMatches(summonerID);
            })
            .then((recentMatches) => {
                let recentMatchesID = [];

                recentMatches.matches.map((match) => {
                    recentMatchesID.push(match.gameId);
                });
                return recentMatchesID;
            })
            .then((recentMatchesID) => {
                resolve({'recentMatchID': recentMatchesID});
            })
            .catch(() => {
                reject({'err': 'does not work'});
            });
    });
};

/**
 * Grabs the match info given a matchID
 * @param matchID
 */
RiotService.prototype.getMatchInfo = (matchID) => {
    let url = '/lol/match/v3/matches/' + matchID + '?api_key=';

    return new Promise((resolve, reject) => {
        Axios.get(baseURI + url + RIOT_API_KEY)
            .then((response) => {
                resolve({"recentMatchInfo": response.data})
            })
            .catch((err) => {
                reject({err});
            })
    })
};


const mockRecentMatchDetails = {
    outcome: 'win',
    gameLength: '897',
    summonerName: 'Mark and Sweep',
    summonerSpells: [
        'flash',
        'ignite'
    ],
    champion: 'Ahri',
    kda: '1.2',
    items: [
        'item1',
        'item2',
        'item3'
    ],
    level: '16',
    creepScore: '190',
    creepScorePerMinute: '1.43'
};

/**
 * Too lazy to set up Mocha Chai. This will be a mock service to return a sample response
 * @return {Promise}
 */
RiotService.prototype.mockService = () => {

    return new Promise((resolve, reject) => {
        resolve(_formatMatchData(mockRecentMatchDetails));
    });
};

module.exports = RiotService;
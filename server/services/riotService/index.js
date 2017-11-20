'use strict';

const common = require('../../common/common');
const Axios = require('axios');

const baseURI = 'https://na1.api.riotgames.com';

function RiotService() {
}

/**
 * Formats all the data from the RIOT APIs and returns a json with the required info
 * @private
 */
const _formatMatchData = (matchInfo) => {

};

/**
 * Grabs the champion image
 * @private
 */
const _getChamponImage = (championID) => {

};

/**
 * Grabs the matchID needed for the match histories
 * @private
 * @param recentMatches: a json of the summoners recent matches
 */
const _getMatchInfo = (matchID) => {
    let url = '/lol/match/v3/matches/' + matchID + '?api_key=RGAPI-558b02b2-d4ea-4cad-99e0-81d2e3c304db'

    return new Promise((resolve, reject) => {

    })

};

/**
 * Gets all recent matches affiliated with the summoner ID
 * @private
 */
const _getRecentMatches = (summoner) => {
    let url = '/lol/match/v3/matchlists/by-account/' + summoner.accountID + '/recent?api_key=RGAPI-558b02b2-d4ea-4cad-99e0-81d2e3c304db';

    // Make and API call to
    return new Promise((resolve, reject) => {
        Axios.get(baseURI + url)
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
    let url = '/lol/summoner/v3/summoners/by-name/Mark%20and%20Sweep?api_key=RGAPI-558b02b2-d4ea-4cad-99e0-81d2e3c304db';

    return new Promise((resolve, reject) => {
        Axios.get(baseURI + url)
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
        // _getSummonerId(summonerName)
        //     .then((summonerID) => {
        //         return _getRecentMatches(summonerID);
        //     })
        //     .then((recentMatches) => {
        //         // for each match in the json, grab the matchID and
        //         resolve({'testing': 'testing resolve'})
        //     })
        //     .catch((err) => {
        //         reject({'message': err});
        //     });
        _getSummonerId(summonerName)
            .then((summonerID) => {
                return _getRecentMatches(summonerID);
            })
            .then((recentMatches) => {
                let recentMatchDetails = [];
                recentMatches.matches.map((match) => {
                    recentMatchDetails.push(_getMatchInfo(match.gameId))
                });
                return recentMatchDetails;
            })
            .catch(() => {
                reject({'err': 'does not work'});
            });
    });
};

RiotService.prototype.getMatchInfo = (matchID) => {

};

module.exports = RiotService;
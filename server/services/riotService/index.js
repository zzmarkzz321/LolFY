'use strict';

const common = require('../../common/common');

function RiotService() {
}

/**
 * Formats all the data from the RIOT APIs and returns a json with the required info
 * @private
 */
const _formatMatchData = (matchInfo, ) => {

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
const _getMatchID = (recentMatches) => {

};

/**
 * Gets all recent matches affiliated with the summoner ID
 * @private
 */
const _getRecentMatches = (summonerID) => {

    // Make and API call to
};

/**
 * Grabs the summoner ID from the given summoner name
 * @private
 */
const _getSummonerId = (summonerName) => {
    // Make a RIOT API Call to Summoner-v3
};

/**
 * Sets up all the RIOT API calls and formats the response data from them
 *
 * @param summonerName
 * @return Promise
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
                // for each match in the json, grab the matchID and
            })
            .catch((err) => {
                reject({'message': err});
            });
    });
};

RiotService.prototype.getMatchInfo = (matchID) => {

};

module.exports = RiotService;
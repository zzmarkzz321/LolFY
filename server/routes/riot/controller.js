'use strict';

let controller = {};
const RiotService = require('../../services/riotService/index');

/**
 * Grabs the Summoner data for their match history and returns it to the user formatted nicely
 *
 * @param req
 * @param res
 */
controller.getSummonerInfo = (req, res) => {

    let summonerName = req.params.summoner;

    return RiotService.prototype.getRecentMatchHistory(summonerName)
        .then((result) => {
            console.log(result);

            // replace with the summoner info
            res.json({'match_info': 'SummonerInfo hit!'});
        })
        .catch(() => {
            res.json({'match_info': 'gay hit'});
        });

};

module.exports = controller;
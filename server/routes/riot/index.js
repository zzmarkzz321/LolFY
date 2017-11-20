'user strict';

/**
 *
 * riot API calls
 *
 */


const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/:summonerName/', controller.getSummonerInfo);

module.exports = router;
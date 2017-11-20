# LolFY
A mini LoL stats application 

## Tools and Resources

1. [Heroku-cra-node Boilerplate](https://github.com/mars/heroku-cra-node)
2. Axios for Promise Based HTTP Requests
3. RIOT Games API for Summoner Stats
4. ReactJS on the front end
5. NodeJS and Express on the back end


## API endpoints

HTTP | URI | Action
--- | --- | ---
**GET** | /riot/api/<summonerName> | Grabs Summoner Match History
**GET** | /match-history/<matchID> | Given a match id, grabs match details for that match

## Notes

Since the match API returns a huge json AND we do that for 20 games, We'll just present a single match history
on the UI, and then make a request per game.
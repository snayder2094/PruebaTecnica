  const router = require("express").Router();

  // dashboard route
  router.get("/admin", (req, res) => {
      var request = require('request');
      let dataApi;
      var options = {
          'method': 'GET',
          'url': 'https://api.twitch.tv/kraken/games/top?limit=100',
          'headers': {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': 'fsspelx2vk9ilvfz3698uomcizdoi6'
          }
      };
      request(options, function(error, response) {
          if (error) throw new Error(error);
          dataApi = response.body
          res.json({
              error: null,
              data: {
                  content: JSON.parse(dataApi),
                  user: req.user,
              },
          });
      });
  });
  router.get("/user", (req, res) => {
      var request = require('request');
      let dataApi;
      var options = {
          'method': 'GET',
          'url': 'https://api.twitch.tv/kraken/games/top',
          'headers': {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': 'fsspelx2vk9ilvfz3698uomcizdoi6'
          }
      };
      request(options, function(error, response) {
          if (error) throw new Error(error);
          dataApi = response.body
          res.json({
              error: null,
              data: {
                  content: JSON.parse(dataApi),
                  user: req.user,
              },
          });
      });
  });

  module.exports = router;
const express = require('express');
const router = express.Router();
const request = require('request-promise-native');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let options = {
        method: 'GET',
        headers: {
            "X-API-Key": "30052613c3424fb8a1a55fef5c916910"
        },
        uri: 'https://www.bungie.net/Platform/GroupV2/Name/Fireteam Herp Derp/1/',
    };

    let result;
    request(options).then((body) => {
        res.send(body);
    });
});

module.exports = router;
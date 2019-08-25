var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res, next) {
  const encoded = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");
  request.post(
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encoded}`
      },
      url: "https://www.reddit.com/api/v1/access_token",
      form: {
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: "http://localhost:3000/redirect"
      }
    },
    function(error, response, body) {
      const { access_token } = JSON.parse(body);
      request.get(
        "https://oauth.reddit.com/api/v1/me",
        {
          headers: {
            Authorization: `bearer ${access_token}`,
            "User-Agent": "react-reddit by liam"
          }
        },
        function(error, response, body) {
          res.json(JSON.parse(body));
        }
      );
    }
  );
});

module.exports = router;
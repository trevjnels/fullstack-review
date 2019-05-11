const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const github = require('/Users/trevornelson/Desktop/Projects/HR/hrr38-fullstack-review/helpers/github.js')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
// res.header("Access-Control-Allow-Origin", "*",
// "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization", 'Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS');
github(req.body.term)
res.sendStatus(200).send("sent user to github database and saved their repos to our server!")
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


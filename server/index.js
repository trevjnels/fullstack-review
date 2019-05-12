const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const github = require('/Users/trevornelson/Desktop/Projects/HR/hrr38-fullstack-review/helpers/github.js')
const {findAll} = require('/Users/trevornelson/Desktop/Projects/HR/hrr38-fullstack-review/database/index.js')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
// res.header("Access-Control-Allow-Origin", "*",
// "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization", 'Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS');
github(req.body.term)
res.sendStatus(200)
});

app.get('/repos', function (req, res) {
      findAll((results)=> {
        // console.log(results)
        // console.log("GOTEEMMMMMM!!  ! ! ! ! ! !  ! ! ! ! ! ! !  ! ! !!*!*!*!**!*!! ! ! ")
        res.send(results.slice(0,25))
      })

})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


/* 
todo: 
- remove ability to post duplicates to database
-





*/

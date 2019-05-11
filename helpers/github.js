const request = require('request');
const config = require('../config.js');
const {save} = require('/Users/trevornelson/Desktop/Projects/HR/hrr38-fullstack-review/database/index.js')


let getReposByUsername = (user) => {


  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
request.get(options, function(err, res, body){
  if(err){
    console.log("we got an error in github.js")
    console.log("GITHUB.js ERR=>  " , err)
  }
  let json = JSON.parse(body)
  var results = [];
  json.forEach(repo => {
    results.push({
      idRepo: repo.id,
      repoName: repo.name,
      username: repo.owner.login,
      stargazers_count: repo.stargazers_count,
      html_url: repo.html_url
    })
  })

    var sortedSliced = results.sort((a, b) => {
    return b.stargazers_count - a.stargazers_count
  }).slice(0,25)

save(sortedSliced)  
})
}

module.exports = getReposByUsername;

// idRepo: Number, //github's repo ID 
// username: String, // username from post request from client / confirmed in sucessful git GET. in github this will be data.owner.login
// idUser: Number, //  github USERID data.owner.id
// stargazers_count: Number,
// html_url: String,  // link to the repo  //data.html_url
// nameRepo: String// repoName // data.name
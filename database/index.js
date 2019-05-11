const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
    idRepo: Number, //github's repo ID 
    repoName: String, // username from post request from client / confirmed in sucessful git GET. in github this will be data.owner.login
    userName: Number, //  github USERID data.owner.id
    stargazers_count: Number,
    html_url: String,  // link to the repo  //data.html_url
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr) => {
repoArr.forEach(function(repo){
  Repo.create(repo, (err, results)=> {
    if(err){
      console.log('ERROR: ', err)
      console.log('error when saving to db')
    } else {
      // console.log('document saved')
 
    }
  })

})
// console.log("SAVING REPOARR to database ", repoArr.length)
findAll();
}
let findAll = () => {

    Repo.find({}, (err, repos)=> {
      if(err){
        console.log("ERR in find all of mongoose")
        console.log(err)
      }
      console.log("FOUND THOSE BITCHES")
      console.log(repos.slice(0,2))
    })


  // console.log("SAVING REPOARR to database ", repoArr.length)
  }

module.exports = {save, findAll};

var  sample = {idRepo: 71012914,
    repoName: 'DoctrineBundle',
    username: 'fabpot',
    stargazers_count: 0,
    html_url: 'https://github.com/fabpot/DoctrineBundle' } 
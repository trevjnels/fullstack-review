const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true });

let repoSchema = mongoose.Schema({
    idRepo: Number, //github's repo ID 
    repoName: String, // username from post request from client / confirmed in sucessful git GET. in github this will be data.owner.login
    userName: String, //  github USERID data.owner.id
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


} 
let findAll = (callback) => {
Repo.find({}, (err, repos)=> {
      if(err){
        console.log("ERR in find all of mongoose")
        console.log(err)
      }
      
        callback(repos)
    }).sort({ stargazers_count: -1})
  }


module.exports = {save, findAll};

var  sample = {idRepo: 71012914,
    repoName: 'DoctrineBundle',
    username: 'fabpot',
    stargazers_count: 0,
    html_url: 'https://github.com/fabpot/DoctrineBundle' } 

  //   getNinjas : function(res){
  //     var twisted = function(res){
  //         return function(err, data){
  //             if (err){
  //                 console.log('error occured');
  //                 return;
  //             }
  //             res.send('My ninjas are:\n');
  //             console.log(data);
  //         }
  //     }
  
  //     Ninja.find({},'name skill',twisted(res));
  // }
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  idRepo: Number, //github's repo ID - our main unique id
    username: String, // username from post request from client / confirmed in sucessful git GET. in github this will be data.owner.login
    idUser: Number, //  github USERID data.owner.id
    stargazers_count: Number,
    html_url: String,  // link to the repo  //data.html_url
    nameRepo: String// repoName // data.name

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
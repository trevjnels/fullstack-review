import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this)

  }

  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      method: "POST",
      url: 'http://localhost:1128/repos',
      data: {term},
      success: function(){console.log('u suceeeded trevs')},
      error: function(){console.log("the ajax post request failed")}
    })
  }


    
    // $.post('127.0.0.1:1128/repos', function(err, data){

    //   if(err){
    //     console.log("HELLO")
    //     console.log("ERROR: ", err)
    //   } else {
    //     console.log("goodbye")
    //     console.log("data or response: ", data)
    //   }
    // })
  

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
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
    this.getter=this.getter.bind(this)
    this.search = this.search.bind(this)

  }

  componentDidMount () {
    // console.log("before ", this.state)
  
    this.getter()
  }

   search (term) {
    console.log(`${term} was searched`);
    // console.log("getter" , JSON.stringify(this.getter()))
    $.ajax({
      method: "POST",
      url: 'http://localhost:1128/repos',
      data: {term},
      success: () => {
        console.log("BEFORE: ", this.state)
        this.getter();
        console.log("After: ", this.state)
      },
    
      error: function(){console.log("the ajax post request failed")}
    })

  }

  getter() {
   $.ajax({
    method: "GET",
    url: 'http://localhost:1128/repos',
    success: (results) =>{ 
      console.log('hi hayden')
      this.setState({repos: results}) 
      
      // console.log("after: ",this.state)
    },
    error: function(){console.log("the ajax GET request failed")}
  })
return;
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
      
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
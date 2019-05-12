import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div className="repos flex flex-col">
    {props.repos.map((repo) => {
      {/* console.log(repo) */}
      return(
        <div key={repo._id}  className="repo flex flex-row">

          <div className="stars"><p>StarCount:</p> {repo.stargazers_count}</div>
          <div className="repoName" ><p>RepoName:</p> {repo.repoName}</div>
          <div className="user" ><p>UserName: </p> {repo.userName}</div>
          <div className="url"> <a href={repo.html_url} >URL: {repo.html_url}</a></div>
        
        
      </div>
      )
    })}
    </div>
  </div>
)

export default RepoList;
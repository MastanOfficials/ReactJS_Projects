import React, { useState } from 'react'
import GitRepos from './Components/GitRepos';
import ProfilePic from './Components/ProfilePic';
import UserSearchBar from './Components/UserSearchBar';

const App = () => {
  let [profilePicture,setProfilePicture]=useState({});
  const [GitResponse,setGitResponse] = useState([]);



  return (
    <>
        <div className="header">
        <h1 className="bg-warning">Git Hub Profile Search user</h1>
        
      </div>
     <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">

    <UserSearchBar profile={setProfilePicture} setGitResponse={setGitResponse} />
    <ProfilePic profilePicture={profilePicture} />
          </div>
        </div>
      </div>
     </div>
     
     <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="card">
          {
            Object.keys(GitResponse).length !==0 ? <GitRepos GitResponse={GitResponse}/>:null
          }
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App;

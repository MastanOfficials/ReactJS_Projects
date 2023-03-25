import React, { useState } from "react";
// import GitRepos from "./GitRepos";

const UserSearchBar = ({ profile,setGitResponse }) => {
  const [inputSearch, setInputsearch] = useState("");
  
  // const [data, setData] = useState({});


  const profileSearch = (e) => {
    fetch(`https://api.github.com/users/${inputSearch}`)
      .then((response) => response.json().then((response) => profile(response)))
      .catch((err) => console.error(err));
  };

  const GitRepository = (e) => {
    fetch(`https://api.github.com/users/${inputSearch}/repos`)
      .then((response) =>
        response.json().then((response) => setGitResponse(response))
      )
      .catch((err) => console.error(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInputsearch(e);
    profileSearch(e);
    GitRepository(e);
  };
  return (
    <>
    {/* <pre>{JSON.stringify(GitResponse)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <h1 className="bg-success text-white">GitHub Profile </h1>
              <div className="container-fluid">
                <form className="d-flex" onSubmit={submitHandler}>
                  <input
                    className="form-control search-item"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    // value={inputSearch}
                    onChange={(e) => setInputsearch(e.target.value)}
                  />
                  <button className="btn btn-info" type="submit">
                    Search
                  </button>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UserSearchBar;

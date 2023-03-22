import React, { useState } from "react";

const DisplayUser = ({setInputUser}) => {
  let [serachUser, setSearchUser] = useState([]);

  let fetchapi = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        let result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
          
        });
       setInputUser(result)
    
      });
  };

  let handerchange = (e) => {
    setSearchUser(e);
    fetchapi(e);
  };

  return (
    <div className="container">
        {/* <pre>{JSON.stringify(handerchange)}</pre>/ */}
      <div className="row">
        <div className="col-md">
          <div className="card">
            <div className="card-header">
              <h1>User Profile</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  onChange={(e)=>handerchange(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type here"
                />
              </div>
              {/* <div className="card-footer">
               
                   {
                    serachUser.map((user) =>{
                        return (<div>
                            {user}
                        </div>)
                    })
                   }
               
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;

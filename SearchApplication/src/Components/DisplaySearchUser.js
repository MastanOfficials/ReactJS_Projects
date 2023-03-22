import React from "react";
// import DisplayAlertBox from "./DisplayAlertBox";

const DisplaySearchUser = ({ inputuser }) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <div className="card-footer">
                {inputuser.map((user) => {
                  return <h2 key={user.id} onClick={(e)=>alert(`you clicked on ${user.name}`)} className="hover-item"> {user.name}</h2>;
                })}
              </div>
              {/* <DisplayAlertBox results={inputuser.name} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySearchUser;

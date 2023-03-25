import React from "react";
import Image from "./Image";

const ProfilePic = ({ profilePicture }) => {
  console.log(profilePicture);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {Object.keys(profilePicture).length !== 0 ? (
            <div className="card">
              <img
                src={profilePicture.avatar_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{profilePicture.login}</h5>
                <p className="card-text">{profilePicture.bio}</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-md-9">
          {Object.keys(profilePicture).length !== 0 ? (
            <Image profiledata={profilePicture} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;

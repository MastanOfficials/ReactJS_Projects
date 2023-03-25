import React from 'react'

const Image = ({profiledata}) => {
  console.log(profiledata)
  return (
    <>
    {/* <pre>{JSON.stringify(profiledata)}</pre> */}
      <div className="container ">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
              <table className="table d-flex"> 
                <tr className="m-2 btn-sm"><button type="button" className="btn btn-warning">followers {profiledata.followers}</button></tr>
                <tr className="m-2 btn-sm"><button type="button" className="btn btn-info">public_repos {profiledata.public_repos}</button></tr>
                <tr className="m-2 btn-sm"><button type="button" className="btn btn-success">public_gists {profiledata.public_gists}</button></tr>
                <tr className="m-2 btn-sm"><button type="button" className="btn btn-danger">following {profiledata.following}</button></tr>
              </table>
              </div>
              <div className="card-body">
                  
                   <h2 className="">  
                   <tr className="card m-2 bg-info">username: {profiledata.twitter_username}</tr>
                    {/* <td>{profiledata.twitter_username}</td> */}
                    <tr className="card m-2">Company: {profiledata.company}</tr>
                    <tr className="card m-2">Type: {profiledata.type}</tr>
                    <tr className="card m-2">location: {profiledata.location}</tr>
                    <tr className="card m-2">Email {profiledata.email}</tr>
                    {/* <td>{profiledata.twitter_username}</td> */}
                  
                   </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Image

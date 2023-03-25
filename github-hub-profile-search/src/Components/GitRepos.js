import React from 'react'

const GitRepos = (props) => {
    console.log(props)
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h2 className="bg-dark text-white">Git Repository</h2>
                    </div>
                    <div className="card-body">
                     {
                        props.GitResponse.map((data)=>{
                            return  <li className="list-group-item " key={data.id}>
                                <a href={data.html_url} target="_blank" >{data.name}</a>
                                <span className="bg-info text-white">{data.stargazers_count}</span>
                            </li>
                               
                        })
                     }
                    </div>
                </div>
            </div>
        </div>
    </div>
      
   
  )
}

export default GitRepos

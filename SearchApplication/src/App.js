import { useState } from 'react';
import './App.css';
import DisplaySearchUser from './Components/DisplaySearchUser';
import DisplayUser from './Components/DisplayUser';

function App() {
  let [inputuser,setInputUser] =useState([])
  return (
   <>

 <div className="search-item">
 <nav className="navbar navbar-dark bg-dark ">
  <h1 className="navbar-text m-2">
  <a className="navbar-brand" href="/">  Searching User Applications </a>
  </h1> 
</nav>
 <DisplayUser setInputUser={setInputUser}/>
 <DisplaySearchUser inputuser={inputuser}/>
 </div>
   </>
  );
}

export default App;

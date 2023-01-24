import React, { useEffect, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [data,setData] =useState([])

  useEffect(()=>{
    fetch("https://qacmsui.analyttica.com/trending-banners")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  return (
    <div className='container'>
    <h1>Fetching the data from Api</h1>
       <div className='row'>
   {
    data.map((user,index)=>{
    return(
      <div className='col col-sm-3 my-5'>
          <div className='card ' key={index}>
              <h5 className='mx-2'><span>Id:</span> {user.id}</h5>
              <img src={`https://qacmsui.analyttica.com${user.Image[0].url}`} width="100%" alt='pic'/>
              <h5 className='mx-2'><span>Title:</span> {user.Title}</h5>
          </div>
      </div>
    )
  })
   }
   </div>
   </div>
  );
}

export default App;

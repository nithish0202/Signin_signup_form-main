import React from 'react'
import { useState,useEffect } from 'react';

const Body = () => {
  let [resData,setResData]=useState([]);
  let imgBaseLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  let getData=()=>
  {
    let result=fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    result.then((data)=>data.json())
    .then((data)=>{
      console.log(data)
      setResData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    })
  }
  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="body_container">
      <div className="main_container">
        <div>
        <button className="search_btn">Top Restaurant</button>
        <input className="search_box"></input>
        </div>
      </div>
      <div className='secondary_container'>
          <div  className='card_container'>
              {
                resData.map((x,y,z)=>{
                  return (<div className="res_card">
                            <img className='cardImg' src={imgBaseLink+x.info.cloudinaryImageId}></img>
                            <div>{x.info.name}</div>
                            <div>{x.info.avgRating}</div>
                            <div>{x.info.cuisines.join(", ")}</div>
                            <div>{x.info.costForTwo}</div>
                          </div>)
                })
              }  
              {console.log(resData)}
          </div>
      </div>
    </div>
  )
}

export default Body
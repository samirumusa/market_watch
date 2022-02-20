import React, {useEffect} from 'react';
import FundaMentalTabs from '../Tabs'
import './fundamentals.css'
import {tradingeconomics} from 'tradingeconomics'


export default function UnitedSates(){

  const data = () => tradingeconomics.getCalendar().then(function(data){
    console.log(data)})
  useEffect(()=>{
    const data = () => tradingeconomics.getCalendar().then(function(data){
      console.log(data)       
    });
  })
  
  
  return(

  
    <>
      
     <div className='fundamental-container'>
      <div className='head-fundamentals-card'>
        <h1 className="heading">Fundamental Data</h1>
        <div className='overall-fundamental'>
          <div className='overall-date'>
               <h2>12-12-2022</h2>
          </div>
          <div className='overall-time'>
            <h2>10:20</h2>
            <span>Timezone</span>

          </div>

        </div>
        <p></p>
      </div>
      </div>
      <div className='tabs-fundamentals'>
        <FundaMentalTabs/>
      </div>
      <div className="indc"></div>
    
    </>
    
  )
}
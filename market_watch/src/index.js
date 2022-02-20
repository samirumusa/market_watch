import React from 'react';
import ReactDOM from 'react-dom';
import {Routes , Route,BrowserRouter as BrowserRoute} from 'react-router-dom'
import Sidebar from './Components/Navigations/Sidebar'
import Charts from './Components/Pages/Charts';
import Dashboard from './Components/Pages/Dashboard';
import Fundamentals from './Components/Pages/Fundamentals/Fundamentals';
import News from './Components/Pages/News';
import Support from './Components/Pages/Support';
import Technicals from './Components/Pages/Technicals';
import UnitedStatesTable from './Components/Pages/Fundamentals/United_States/UnitedStatesTable';
import './App.css'

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRoute>
      <Sidebar />
      <Routes>
          <Route path='/' exact element={<Dashboard/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/fundamentals' element={<Fundamentals/>}/>
          <Route path='/united_states' element={<UnitedStatesTable/>}/>
          <Route path='/technicals' element={<Technicals/>}/>
          <Route path='/support' element={<Support/>}/>
   </Routes>
   </BrowserRoute>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


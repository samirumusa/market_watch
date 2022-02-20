import React, {useState}from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './sideBar.css'

export default function Sidebar() {
    const [state, setstate] = useState(false);

    const showSidebar = ()=>{
        return setstate(!state)
    }
    
  return (
    <>
       <div className="navbar">
           <Link to="#" className="menu-bars" onClick={showSidebar}><FaIcons.FaBars/></Link>
       </div>
      <nav className={ state ? 'menu-list active':'menu-list'}>
          <ul className='menu-items' onClick={showSidebar}>
              <li className='menu-bars'>
                  <Link to="/" className="menu-bar-close"  ><AiIcons.AiOutlineClose/></Link>
              </li>
              {SidebarData.map((val,ind)=>{
                  return(
                      <li key={ind} className={val.cName}  >
                          <Link to={val.path} >
                                {val.icon}
                            <span>{val.title} </span>
                          </Link>
                          
                      </li> )
              })}
          </ul>
      </nav>
    </>
  )
}

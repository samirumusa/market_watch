import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as BsIcons from 'react-icons/bs'

export const SidebarData=[
        {
            title:'Dashboard',
            path:"/",
            cName:"nav-text",
            icon: <MdIcons.MdOutlineSpaceDashboard/>
        },
        {
            title:'Fundamentals',
            path:"/fundamentals",
            cName:"nav-text",
            icon: <FaIcons.FaNewspaper/>
        },
        {
            title:'Technicals',
            path:"/technicals",
            cName:"nav-text",
            icon: <FaIcons.FaChartPie/>
        },
        {
            title:'Charts',
            path:"/charts",
            cName:"nav-text",
            icon: <MdIcons.MdWaterfallChart/>
        },
        {
            title:'News',
            path:"/news",
            cName:"nav-text",
            icon: <BsIcons.BsNewspaper/>
        },

        {
            title:'Support',
            path:"/support",
            cName:"nav-text",
            icon:<MdIcons.MdOutlineContactSupport/>
        }
]
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
            title:'United States',
            path:"/fundamentals",
            cName:"nav-text",
            icon: <FaIcons.FaNewspaper/>
        },
        {
            title:'Canada',
            path:"/technicals",
            cName:"nav-text",
            icon: <FaIcons.FaChartPie/>
        },
        {
            title:'Japan',
            path:"/charts",
            cName:"nav-text",
            icon: <MdIcons.MdWaterfallChart/>
        },
        {
            title:'Australia',
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
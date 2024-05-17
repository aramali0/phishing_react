import React, { useState } from 'react';
import NavCard from './NavCard';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";
import {
  faHome,
  faFileAlt,
  faChartBar,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
 const sideLinks = [
  {
    id: "alerts",
    title: "Alerts",
  },
  {
    id: "statistics",
    title: "Statistics",
  },
  
];
//w-1/5 h-screen bg-gray-800 text-white p-5 box-border rounded-lg m-2

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={'fixed h-full bg-blue border-l-10 box-border rounded-xl transition-all  w-72 m-2 mr-0'}>
      <div className="text-2xl font-bold mb-12 text-center">DyafaToCom</div>
      <nav className='flex flex-col'>
        <NavLink className="text-white no-underline p-2 mb-2 hover:bg-gray-700 hover:rounded-md active:bg-gray-700 active:rounded-md" to="/api/alerts"   >
          <FontAwesomeIcon icon={faHome} /> Accueil
        </NavLink>
        <NavLink to="/api/statistics" activeClassName="active">
          <FontAwesomeIcon icon={faFileAlt} /> Statistics
        </NavLink>
        <NavLink to="/api/url" activeClassName="active">
          <FontAwesomeIcon icon={faChartBar} /> Url cheking
        </NavLink>
        
      </nav>
    
    </div>
  );
};

export default Navigation;

import React, { useState } from 'react';
import NavCard from './NavCard';

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


const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`fixed h-full bg-blue border-l-10 transition-all ${active ? 'w-20' : 'w-72'}`}>
    {
        sideLinks.map((link,index) =>(
            <NavCard key={index} name={link.title} to={link.id} id={link.id}/>
        ))
    }
    </div>
  );
};

export default Navigation;

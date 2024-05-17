import React, { useState } from 'react';
import Details from './Details';

const Main = () => {
  const [alerts,setAlerts] = useState([
    {
      id: 1,
      title: "simo",
      date: new Date(),
      status: "negative"  
    },
    {
      id: 1,
      title: "simo",
      date: new Date(),
      status: "negative"  
    }
  ])



  return (
    <div className="absolute w-full transition-all bg-white min-h-screen left-72">
      <div className="flex items-center justify-between h-15 px-3">
        <div className="flex items-center justify-center w-15 h-15 text-4xl cursor-pointer">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="relative w-10 h-10 overflow-hidden rounded-full cursor-pointer">
          <img src="assets/imgs/customer01.jpg" alt="User" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-3/4 p-5">
        <Details alerts={alerts} />
      </div>
    </div>
  );
};

export default Main;


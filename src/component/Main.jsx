import React from 'react';
import Details from './Details';

const Main = () => {

  const alert = {
      id: 1,
      title: "simo",
      date: new Date(),
      status: "negative"  // Change to "negative" to test the red color
  }

  return (
    <div className="absolute w-full transition-all bg-white min-h-screen left-72">
      <div className="flex items-center justify-between h-15 px-3">
        <div className="flex items-center justify-center w-15 h-15 text-4xl cursor-pointer">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="relative w-96 mx-3">
          <label className="relative w-full">
            <input type="text" placeholder="Search here" className="w-full h-10 pl-10 pr-5 rounded-full border border-gray-300 outline-none" />
            <ion-icon name="search-outline" className="absolute top-0 left-3 text-xl"></ion-icon>
          </label>
        </div>
        <div className="relative w-10 h-10 overflow-hidden rounded-full cursor-pointer">
          <img src="assets/imgs/customer01.jpg" alt="User" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-3/4 p-5">
        <Details alert={alert} />
      </div>
    </div>
  );
};

export default Main;


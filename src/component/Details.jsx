import React, { useState } from 'react';
import AlertCard from './AlertCard';


const Details = ({ alerts }) => {
  return (
    <div className="w-full p-5">
      <div className="min-h-125 p-5 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold text-blue">Alerts</h2>
        </div>
        <table className="w-full mt-3 border-collapse">
          <thead>
            <tr className="font-semibold">
              <td>Id</td>
              <td className="text-right ">Title</td>
              <td className="text-center">Date</td>
              <td className="text-right pr-10">Status</td>
              <td className="text-right pr-10">Actions</td>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <AlertCard key={index} alert={alert} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
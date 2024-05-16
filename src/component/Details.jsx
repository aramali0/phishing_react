import React from 'react';

const Details = ({ alert }) => {
  const statusColor = alert.status === 'positive' ? 'bg-green-500' : 'bg-red-500';

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
              <td className="text-right">Title</td>
              <td className="text-center">Date</td>
              <td className="text-right">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-blue hover:text-white">
              <td className="p-2">{alert.id}</td>
              <td className="p-2 text-right">{alert.title}</td>
              <td className="p-2 text-center">{alert.date.toLocaleString()}</td>
              <td className="p-2 text-right">
                <span className={`px-2 py-1 text-sm font-medium text-white rounded ${statusColor}`}>{alert.status}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;


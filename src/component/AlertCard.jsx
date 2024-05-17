import React, { useState } from 'react';

function AlertCard({ alert }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const statusColor = alert.status === 'positive' ? 'bg-green-500' : 'bg-red-500';

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-blue hover:text-white">
        <td className="p-2">{alert.id}</td>
        <td className="p-2 text-right">{alert.title}</td>
        <td className="p-2 text-center">{alert.date.toLocaleString()}</td>
        <td className="p-2 text-right">
          <span className={`px-2 py-1 text-sm font-medium text-white rounded ${statusColor}`}>
            {alert.status}
          </span>
        </td>
        <td className="p-2 text-right">
          <button className="px-4 py-2 bg-cyan-600 text-white rounded" onClick={openModal}>
            View Details
          </button>
        </td>
      </tr>
      {isModalOpen && (
        <Modal alert={alert} closeModal={closeModal} />
      )}
    </>
  );
}

function Modal({ alert, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Alert Details</h3>
        <p>
          <strong>ID:</strong> {alert.id}
        </p>
        <p>
          <strong>Title:</strong> {alert.title}
        </p>
        <p>
          <strong>Date:</strong> {alert.date.toLocaleString()}
        </p>
        <p>
          <strong>Status:</strong> {alert.status}
        </p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AlertCard;
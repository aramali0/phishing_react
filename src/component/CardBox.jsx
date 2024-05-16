import React from 'react';

const CardBox = () => {
  return (
    <div className="grid grid-cols-4 gap-7 p-5">
      <div className="flex justify-between p-7 bg-white rounded-xl shadow-md cursor-pointer hover:bg-blue">
        <div>
          <div className="text-5xl font-medium text-blue">1,504</div>
          <div className="text-xl text-gray-600 mt-1">Daily Views</div>
        </div>
        <div className="text-6xl text-gray-600">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
      </div>
      {/* Repeat for other cards */}
    </div>
  );
};

export default CardBox;

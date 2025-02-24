// const Calendar = () => {
//     return (
      // <div className="p-6 bg-gray-100 min-h-screen">
      //   <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      //     {/* Header Section */}
      //     <div className="bg-blue-500 text-white p-6">
      //       <h1 className="text-2xl md:text-3xl font-bold text-center">
      //         Event Calendar
      //       </h1>
      //       <p className="text-center mt-2 text-sm md:text-base">
      //         View and manage your scheduled events effortlessly.
      //       </p>
      //     </div>
  
      //     {/* Calendar Section */}
      //     <div className="p-6">
      //       {/* Example calendar grid layout */}
      //       <div className="grid grid-cols-7 gap-2 md:gap-4">
      //         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
      //           <div
      //             key={day}
      //             className="text-center font-semibold text-sm md:text-base text-gray-700"
      //           >
      //             {day}
      //           </div>
      //         ))}
      //         {/* Placeholder for days */}
      //         {Array.from({ length: 30 }).map((_, index) => (
      //           <div
      //             key={index}
      //             className="h-16 flex items-center justify-center border rounded-md bg-gray-50 hover:bg-blue-100 cursor-pointer transition"
      //           >
      //             {index + 1}
      //           </div>
      //         ))}
      //       </div>
      //     </div>
  
      //   </div>
      // </div>
//     );
//   };
  
//   export default Calendar;

import React from 'react';

const Calendar = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header Section */}
      <div className="bg-blue-500 text-white p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Event Calendar
        </h1>
        <p className="text-center mt-2 text-sm md:text-base">
          View and manage your scheduled events effortlessly.
        </p>
      </div>

      {/* Calendar Section */}
      <div className="p-6">
        {/* Example calendar grid layout */}
        <div className="grid grid-cols-7 gap-2 md:gap-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-sm md:text-base text-gray-700"
            >
              {day}
            </div>
          ))}
          {/* Placeholder for days */}
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center border rounded-md bg-gray-50 hover:bg-blue-100 cursor-pointer transition"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
  );
};

export default Calendar;
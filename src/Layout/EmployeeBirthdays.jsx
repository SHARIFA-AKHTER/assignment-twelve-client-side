import React from 'react';

const EmployeeBirthdays = () => {
    return (
        <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Employee Birthdays</h2>
        {/* <ul className="bg-white p-4 rounded shadow">
          {data.employeeBirthdays.map((employee) => (
            <li
              key={employee.id}
              className="p-2 border-b last:border-none flex justify-between"
            >
              <span>{employee.name}</span>
              <span className="text-gray-600">{employee.birthday}</span>
            </li>
          ))}
        </ul> */}
      </div>
    
    );
};

export default EmployeeBirthdays;
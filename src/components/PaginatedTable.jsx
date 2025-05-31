
import React from "react";

const PaginatedTable = ({ users }) => {
  console.log("Users:", users); // For debugging

  return (
    <div className="overflow-x-auto w-full shadow-sm rounded-md">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">Email</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id || user.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  {user.name || "No Name"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  {user.email || "No Email"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="2"
                className="text-center px-4 py-6 text-gray-500 text-sm sm:text-base"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaginatedTable;
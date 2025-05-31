
import React, { useState, useEffect } from "react";
import PaginatedTable from "../PaginatedTable";
import { fetchUsersByPage } from './../Services/services';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsersByPage(currentPage, usersPerPage).then((data) => {
      console.log("Fetched Data:", data);
      if (data.users && data.users.length > 0) {
        setUsers(data.users[0].user || []);
        setTotalUsers(data.total || 0);
      } else {
        setUsers([]);
        setTotalUsers(0);
      }
    }).catch(err => {
      console.error("Error fetching users:", err);
      setUsers([]);
      setTotalUsers(0);
    });
  }, [currentPage]);

  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const changePage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">User List</h1>

      <PaginatedTable users={users} />

      {/* Pagination Footer */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded bg-white shadow-sm hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={`px-4 py-2 border rounded shadow-sm ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded bg-white shadow-sm hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;

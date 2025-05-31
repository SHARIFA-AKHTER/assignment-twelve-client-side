import { useEffect, useState } from "react";
import axios from "axios";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/requests")
      .then(response => setNotices(response.data))
      .catch(error => console.error("Error fetching notices:", error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold">📢 Notices</h2>
      {notices.length ? (
        <ul>
          {notices.map((notice, index) => (
            <li key={notice.id || index} className="border p-2 my-2">
              {notice.type}
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notices.</p>
      )}
    </div>
  );
};

export default Notices;

import axios from "axios";

export const fetchUsersByPage = async (page, limit) => {
  try {
    const response = await axios.get(`http://localhost:3000/user?_page=${page}&_limit=${limit}`);
    
    const data = response.data;
    return data; 
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};
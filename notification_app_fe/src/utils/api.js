import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

// API call to fetch notifications
export const fetchNotifications = async (token, page = 1, limit = 10) => {
  return await axios.get(`${BASE_URL}/notifications`, {
    params: { page, limit },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
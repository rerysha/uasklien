import axios from "axios";

// Base URL dinamis untuk mendukung berbagai lingkungan
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
});

// Interceptor untuk menambahkan header default, jika diperlukan
API.interceptors.request.use(
  (config) => {
    // Misalnya, tambahkan token autentikasi jika diperlukan
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fungsi untuk mengambil data pengguna
export const fetchUsers = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Fungsi untuk membuat pengguna baru
export const createUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Fungsi untuk mengambil laporan
export const fetchReports = async () => {
  try {
    const response = await API.get("/reports");
    return response.data;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};

// Fungsi untuk membuat laporan baru
export const createReport = async (reportData) => {
  try {
    const response = await API.post("/reports", reportData);
    return response.data;
  } catch (error) {
    console.error("Error creating report:", error);
    throw error;
  }
};

// Fungsi untuk menghapus laporan berdasarkan ID
export const deleteReport = async (id) => {
  try {
    const response = await API.delete(`/reports/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting report with ID ${id}:`, error);
    throw error;
  }
};

import React, { useEffect, useState } from "react";
import { fetchReports } from "../services/api";

function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReportsData();
  }, []);

  const fetchReportsData = async () => {
    try {
      const response = await fetchReports();
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Berita Banjir</h1>
      {reports.length > 0 ? (
        <ul className="space-y-4">
          {reports.map((report) => (
            <li key={report.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="font-semibold">{report.location}</h2>
              <p className="text-gray-600">{report.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center"></p>
      )}
    </div>
  );
}

export default Dashboard;

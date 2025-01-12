import React, { useEffect, useState } from 'react';
import { fetchReports } from '../services/api';

const BeritaBanjir = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReports = async () => {
      try {
        const data = await fetchReports();
        setReports(data);
      } catch (err) {
        setError('Gagal memuat laporan berita banjir.');
      } finally {
        setLoading(false);
      }
    };

    getReports();
  }, []);

  if (loading) return <p>Memuat laporan berita...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Berita Banjir di Semarang</h1>
      {reports.length === 0 ? (
        <p>Tidak ada laporan banjir saat ini.</p>
      ) : (
        <ul>
          {reports.map((report, index) => (
            <li key={index}>
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <a href={report.link} target="_blank" rel="noopener noreferrer">
                Baca selengkapnya
              </a>
              <br />
              <small>{new Date(report.pubDate).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BeritaBanjir;

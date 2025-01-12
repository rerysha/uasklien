import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchReports } from "../services/api";
import { useNavigate } from "react-router-dom";

const newsData = [
  {
    title: "Banjir Setinggi Dada di Meteseh Semarang gegara Tanggul Sungai Jebol",
    date: "Rabu, 11 Des 2024 23:19 WIB",
    description:"Tanggul Kali Tunggul, Kelurahan Meteseh, Kecamatan Tembalang, Kota Semarang, jebol. Air sungai pun masuk rumah. Sejumlah warga pun mengungsi.",
    image:"https://akcdn.detik.net.id/community/media/visual/2024/12/11/banjir-di-perumahan-dahlia-kelurahan-meteseh-kecamatan-tembalang-kota-semarang-rabu-11122024-malam-1_43.jpeg?w=300&q=80",
  },
  {
    title: "Meteseh Semarang Banjir Setinggi Dada, Warga Mengungsi",
    date: "Rabu, 11 Des 2024 20:59 WIB",
    description:"Hujan deras mengguyur Kota Semarang sejak sore dan baru reda malam ini. Imbasnya, Kampung RT 8 RW 9 Kelurahan Meteseh, Tembalang, kebanjiran. Warga mengungsi.",
    image:"https://akcdn.detik.net.id/community/media/visual/2024/12/11/banjir-di-rt-8-rw-9-kelurahan-meteseh-kecamatan-tembalang-kota-semarang-rabu-11122024-malam-1_43.jpeg?w=300&q=80",
  },
  {
    title: "Banjir Banyubiru Semarang: 2 Remaja Sempat Terseret-72 Rumah Terendam",
    date: "Rabu, 11 Des 2024 08:56 WIB",
    description: "Dua remaja terseret arus akibat banjir di Banyubiru, Semarang.",
    image:"https://akcdn.detik.net.id/community/media/visual/2024/12/11/kondisi-dampak-tanggul-jebol-di-dusun-ngendo-kecamatan-banyubiru-kabupaten-semarang-selasa-10122024-foto-diunggah-rabu-1112202_43.jpeg?w=300&q=80",
  },
  {
    title: "Rumah Roboh Tergerus Banjir, Buruh Cuci Semarang Berharap Dapat Rusun",
    date: "Senin, 18 Mar 2024 17:05 WIB",
    description:"Nasib pilu menimpa seorang buruh cuci di Semarang, Sri Suratini (46). Rumahnya roboh dan tak bisa dihuni usai tanah rumahnya tergerus arus sungai saat banjir menerjang Semarang.",
    image:"https://akcdn.detik.net.id/community/media/visual/2024/03/18/penampakan-rumah-sri-suratini-yang-roboh-tergerus-arus-banjir-senin-1832024-2_169.jpeg?w=700&q=90",
  },
  {
    title: "Kondisi Terkini Banjir di Kaligawe Semarang, Motor Banyak yang Mogok",
    date: "Minggu, 17 Mar 2024 13:25 WIB",
    description:"Banjir di Jalan Kaligawe atau Pantura Semarang-Demak mulai surut. Arus lalu lintas yang sempat lumpuh, perlahan mulai bisa dilintasi, terutama oleh kendaraan besar.",
    image:"https://akcdn.detik.net.id/community/media/visual/2024/03/17/penampakan-banjir-di-jalan-kaligawe-semarang-siang-ini-minggu-1732024_43.jpeg?w=300&q=80",
  },
  {
    title:"Pemkot Semarang Kirim Selimut-Petugas Medis ke Korban Banjir", 
    date:"Sabtu, 16 Mar 2024 20:29 WIB",
    description:"Bantuan demi bantuan terus disalurkan ke korban banjir di Kota Semarang, termasuk wilayah Trimulyo, Kecamatan Genuk yang terdampak cukup parah. Posko kesehatan juga disiagakan memeriksa para pengungsi.", 
    image:"https://akcdn.detik.net.id/community/media/visual/2024/03/16/banjir-bandang-semarang-4_43.jpeg?w=300&q=80",
  },
];

function Home() {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  // Fetch data banjir dari API saat komponen dimuat
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
      <h2 className="text-2xl font-bold text-center my-4 text-gradient">Selamat Datang di Banjir-App</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Berita Banjir */}
        <Card
          title="Berita Banjir"
          description="Informasi terkini mengenai banjir di Semarang."
        >
          <ul className="text-sm text-gray-700">
            {reports.slice(0, 3).map((report) => (
              <li key={report.id} className="mb-2 hover:scale-105 transition-all duration-300">
                <strong>{report.location}</strong>: {report.description}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/berita-banjir")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transform transition duration-300 ease-in-out hover:scale-105"
          >
            Lihat Selengkapnya
          </button>
        </Card>

        {/* Data Banjir */}
        <Card
          title="Data Banjir"
          description="Lihat data banjir yang telah tercatat di Semarang."
        >
          <p className="text-sm text-gray-700">
            Total laporan: <strong>{reports.length}</strong>
          </p>
        </Card>

        {/* Laporkan Banjir */}
        <Card
          title="Laporkan Banjir"
          description="Laporkan banjir di sekitar Anda untuk membantu masyarakat."
        >
         <button
            onClick={() => navigate("/add-report")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transform transition duration-300 ease-in-out hover:scale-105"
          >
            Klik Untuk Melaporkan
          </button>
        </Card>
      </div>

      {/* Berita Terkini */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-gradient">Berita Terkini</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-110"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">{news.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{news.date}</p>
              <p className="text-gray-700 text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-6">
        Halaman yang Anda cari tidak tersedia. Mungkin Anda salah mengetik alamat atau halaman telah dihapus.
      </p>
      <Link to="/"className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}

export default NotFound;

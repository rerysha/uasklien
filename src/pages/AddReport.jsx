import React from "react";
import Form from "../components/Form";
import { createReport } from "../services/api";

function AddReport() {
  const handleSubmit = async (data) => {
    try {
      await createReport(data);
      alert("Laporan berhasil ditambahkan!");
    } catch (error) {
      console.error("Error creating report:", error);
      alert("Terjadi kesalahan saat menambahkan laporan.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Form
        title="Laporkan Banjir"
        fields={[
          { name: "location", label: "Lokasi", type: "text", placeholder: "Masukkan lokasi banjir" },
          { name: "description", label: "Deskripsi", type: "textarea", placeholder: "Deskripsi banjir" },
        ]}
        onSubmit={handleSubmit}
        buttonLabel="Tambah Laporan"
      />
    </div>
  );
}

export default AddReport;

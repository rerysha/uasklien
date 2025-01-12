import React from "react";
import Form from "../components/Form";
import { createUser } from "../services/api";

function Register() {
  const handleSubmit = async (data) => {
    try {
      await createUser(data);
      alert("Registrasi berhasil!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Terjadi kesalahan saat registrasi.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Form
        title="Registrasi Pengguna"
        fields={[
          { name: "name", label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama lengkap" },
          { name: "email", label: "Email", type: "email", placeholder: "Masukkan email" },
          { name: "password", label: "Password", type: "password", placeholder: "Masukkan password" },
        ]}
        onSubmit={handleSubmit}
        buttonLabel="Daftar"
      />
    </div>
  );
}

export default Register;

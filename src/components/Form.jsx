import React, { useState } from "react";

function Form({ fields, onSubmit, buttonLabel, title }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={field.name} className="block text-sm font-medium mb-2">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                placeholder={field.placeholder}
                rows={field.rows || 3}
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}

export default Form;

import React, { useState } from 'react';
import './AddEmployeeForm.css';

function AddEmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    // Optional: Email validation
    if (!/^[\w-.]+@[\w-.]+\.\w{2,}$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim() }),
      });
      if (!res.ok) {
        // Attempt to parse error message
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to add employee.");
      }
      setSuccess("Employee added!");
      setForm({ name: "", email: "" });
      if (onAdd) onAdd(form.name);
    } catch (err) {
      setError(err.message || "Could not connect to server.");
    }
    setLoading(false);
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="form-fields">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          disabled={loading}
          required
          autoFocus
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Employee"}</button>
      </div>
      {/* UX Feedback */}
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </form>
  );
}

export default AddEmployeeForm;

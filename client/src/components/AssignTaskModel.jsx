import React, { useState } from "react";
import "./AssignTaskModel.css"; 

function AssignTaskModal({ employee, onTaskAssigned, onClose }) {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("http://localhost:5001/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, emp_id: employee.id }),
    });
    onTaskAssigned();
    onClose();
  };

  return (
    <div className="modal-backdrop-assign">
      <div className="assign-modal-glass">
        <h2>Assign New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Task Title"
            value={task.title}
            onChange={handleChange}
            autoFocus
            required
          />
          <textarea
            name="description"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
            required
            rows={3}
          />
          <div className="assign-modal-actions">
            <button type="submit" className="assign-btn-main">
              Assign
            </button>
            <button
              type="button"
              className="assign-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignTaskModal;

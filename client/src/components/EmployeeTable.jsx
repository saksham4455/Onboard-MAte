import React, { useState } from "react";
import './EmployeeTablee.css'; // make sure this file exists

function getStats(tasks) {
  if (!tasks || !tasks.length) return { assigned: 0, complete: 0, percent: 0 };
  const assigned = tasks.length;
  const complete = tasks.filter(t => t.completed).length;
  return { assigned, complete, percent: Math.round((complete / assigned) * 100) };
}

function EmployeeTable({ employees, onAssignTask, onDelete }) {
  const [selected, setSelected] = useState(null);

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Status</th>
          <th>Task Stats</th>
          <th>Assign Task</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => {
          const stats = getStats(emp.tasks);
          return (
            <tr key={emp.id}>
              <td>{emp.serial}</td>
              <td>{emp.name}</td>
              <td><span className={`badge ${emp.status}`}>{emp.status}</span></td>
              <td>
                <span>{stats.complete}/{stats.assigned}</span>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fg" style={{width: `${stats.percent}%`}} />
                </div>
                <span className="progress-label">{stats.percent}%</span>
              </td>
              <td>
                <button onClick={() => onAssignTask(emp)} className="assign-btn">Assign</button>
              </td>
              <td>
                <button onClick={() => onDelete(emp.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;

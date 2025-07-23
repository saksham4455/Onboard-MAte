import React, { useState, useEffect } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import EmployeeTable from "./EmployeeTable";
import AssignTaskModal from "./AssignTaskModel";
import RecentActivity from "./RecentActivity";
import "./AdminDashboard.css";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [employees, setEmployees] = useState([]);
  const [recentActions, setRecentActions] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const { setRole, setEmployeeId } = useUser();
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:5001/api/employees");
    const data = await res.json();
    data.forEach((emp, i) => {
      emp.serial = i + 1;
    });
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEmployeeAdded = (employeeName) => {
    fetchEmployees();
    setRecentActions(prev => [
      { action: `Added new employee: ${employeeName}`, time: new Date().toLocaleString() },
      ...prev,
    ]);
  };

  const handleTaskAssigned = (employeeName) => {
    fetchEmployees();
    setRecentActions(prev => [
      { action: `Assigned task to: ${employeeName}`, time: new Date().toLocaleString() },
      ...prev,
    ]);
  };

  const handleDeleteEmployee = async (empId) => {
    await fetch(`http://localhost:5001/api/employees/${empId}`, {
      method: "DELETE",
    });
    fetchEmployees();
    setRecentActions(prev => [
      { action: `Deleted employee ID: ${empId}`, time: new Date().toLocaleString() },
      ...prev,
    ]);
  };

  const handleLogout = () => {
    setRole(null);
    setEmployeeId(null);
    navigate("/");
  };

  return (
    <div className="admin-dashboard-glass">
      <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>

      {/* HEADER */}
      <header className="admin-glass-header">
        <div className="admin-avatar"><span>AD</span></div>
        <div>
          <h1>Welcome back, <span>Admin</span> 👋</h1>
          <p className="admin-sub">Let’s empower new hires and track onboarding faster than ever.</p>
        </div>
        <div className="admin-summary-glass">
          <div><strong>{employees.length}</strong><span>Total Employees</span></div>
          <div>
            <strong>{employees.filter(e => e.status === "in progress" || e.status === "pending").length}</strong>
            <span>Onboarding</span>
          </div>
          <div>
            <strong>{employees.filter(e => e.status === "completed").length}</strong>
            <span>Completed</span>
          </div>
        </div>
      </header>

      <main className="admin-card-grid">
        <section className="admin-glass-card">
          <h2>Add Employee</h2>
          <AddEmployeeForm onAdd={handleEmployeeAdded} />
        </section>
        <section className="admin-glass-card">
          <h2>All Employees</h2>
          <EmployeeTable
            employees={employees}
            onAssignTask={setSelectedEmployee}
            onDelete={handleDeleteEmployee}
          />
        </section>
        <section className="admin-glass-card">
          <h2>Recent Activity</h2>
          <RecentActivity actions={recentActions} />
        </section>
      </main>

      {selectedEmployee && (
        <AssignTaskModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onTaskAssigned={() => handleTaskAssigned(selectedEmployee.name)}
        />
      )}
    </div>
  );
}

export default AdminDashboard;

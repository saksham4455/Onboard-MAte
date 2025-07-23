function DashboardStats({ employees }) {
  const total = employees.length;
  const onboard = employees.filter(e => e.status === "in progress").length;
  const completed = employees.filter(e => e.status === "completed").length;

  return (
    <div className="dashboard-stats">
      <div className="stat-card">Total Employees <strong>{total}</strong></div>
      <div className="stat-card">Onboarding <strong>{onboard}</strong></div>
      <div className="stat-card">Completed <strong>{completed}</strong></div>
    </div>
  );
}

export default DashboardStats;

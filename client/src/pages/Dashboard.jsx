import { useUser } from "../context/UserContext";
import AdminDashboard from "../components/AdminDashboard.jsx";
import EmployeeDashboard from "../components/EmployeeDashboard.jsx";

function Dashboard() {
  const { role } = useUser();
  if (!role) return <p>Not logged in. Please go back to Home.</p>;

  return (
    <div>
      <h2>{role} Dashboard</h2>
      {role === "Admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
}

export default Dashboard;

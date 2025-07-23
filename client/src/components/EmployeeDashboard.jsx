import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./EmployeeDashboard.css";

const API = "http://localhost:5001/api/tasks"; // Adjust as needed

function EmployeeDashboard() {
  const { setRole, setEmployeeId, employeeId } = useUser ? useUser() : { setRole:()=>{}, setEmployeeId:()=>{}, employeeId:1 };
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [animateDone, setAnimateDone] = useState(false);
  const navigate = useNavigate();

  const empId = employeeId || 1;

  useEffect(() => {
    fetch(`${API}?emp_id=${empId}`)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      });
  }, [empId]);

  // Animate confetti when ALL tasks completed
  useEffect(() => {
    if (!loading && tasks.length > 0 && tasks.every(t => t.completed)) {
      setAnimateDone(true);
      const id = setTimeout(() => setAnimateDone(false), 2200);
      return () => clearTimeout(id);
    }
  }, [tasks, loading]);

  const handleToggleComplete = async (taskId, current) => {
    setMessage("");
    const res = await fetch(`${API}/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !current }),
    });
    if (res.ok) {
      setTasks(tasks =>
        tasks.map(t =>
          t.id === taskId ? { ...t, completed: !current } : t
        )
      );
      setMessage(!current ? "Task marked as completed!" : "Task re-opened!");
      setTimeout(() => setMessage(""), 1150);
    } else {
      setMessage("Failed to update task");
    }
  };

  const completedTasks = tasks.filter(t => t.completed);
  const activeTasks = tasks.filter(t => !t.completed);

  const completed = completedTasks.length;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  const handleLogout = () => {
    setRole && setRole(null);
    setEmployeeId && setEmployeeId(null);
    navigate("/");
  };

  return (
    <div className="employee-dashboard-glass">
      {/* Logout button */}
      <button className="employee-logout-btn animated-btn" onClick={handleLogout}>Logout</button>

      <header className="employee-welcome-glass animated-fadein">
        <div className="welcome-emoji-spin">
          <span role="img" aria-label="Rocket">🚀</span>
        </div>
        <h1>
          Welcome <span>Employee</span>!
        </h1>
        <p>
          Here’s your onboarding checklist. Mark each step as you progress! 🎯
        </p>
        <div className="emp-progress-bar animated-grow">
          <div
            className="emp-progress-fg"
            style={{
              width: `${percent}%`,
              transition: "width 0.7s cubic-bezier(.6,.3,.1,1.02)"
            }}
          />
        </div>
        <div className="emp-progress-label">
          {completed} / {tasks.length} completed &bull; {percent}%
        </div>
      </header>

      <main className="employee-task-card-list">
        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <>
            {/* -- Assigned (Active) Tasks -- */}
            <div className="employee-task-section">
              <h3 className="slide-in-title">Assigned Tasks</h3>
              {activeTasks.length === 0 ? (
                <div className="animated-card done-card">
                  <p>
                    <span role="img" aria-label="Party">🎉</span> All onboarding tasks complete!
                  </p>
                  {animateDone && <div className="confetti"></div>}
                </div>
              ) : (
                activeTasks.map((task, idx) => (
                  <div
                    className={"employee-task-card task-animate-in"}
                    key={task.id}
                    style={{ animationDelay: `${0.11 * idx}s` }}
                  >
                    <div className="task-row">
                      <input
                        type="checkbox"
                        checked={!!task.completed}
                        onChange={() => handleToggleComplete(task.id, task.completed)}
                        className="checkbox-animate"
                      />
                      <div className="task-info">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                      </div>
                    </div>
                    <div className="task-footer">
                      <span className="task-status incomplete">Incomplete</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* -- Completed Tasks -- */}
            <div className="employee-task-section past-tasks">
              <h3 className="slide-in-title">Past (Completed) Tasks</h3>
              {completedTasks.length === 0 ? (
                <p>No tasks completed yet.</p>
              ) : (
                completedTasks.map((task, idx) => (
                  <div
                    className="employee-task-card completed task-animate-in"
                    key={task.id}
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <div className="task-row">
                      <input
                        type="checkbox"
                        checked={true}
                        onChange={() => handleToggleComplete(task.id, true)}
                        className="checkbox-animate"
                      />
                      <div className="task-info">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                      </div>
                    </div>
                    <div className="task-footer">
                      <span className="task-status complete">✅ Completed</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
        {message && <div className="employee-message bounce-in">{message}</div>}
      </main>
      {/* Confetti effect (optional, ONLY when complete) */}
      {animateDone && <div className="confetti"></div>}
    </div>
  );
}

export default EmployeeDashboard;

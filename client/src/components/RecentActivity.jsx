function RecentActivity({ actions }) {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        {actions.map((item, index) => (
          <li key={index}>
            <span>{item.action}</span>
            <time>{item.time}</time>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;

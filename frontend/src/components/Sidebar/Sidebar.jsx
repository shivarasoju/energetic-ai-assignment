import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>Dashboard</li>
        <li>Orders</li>
        <li>Products</li>
        <li className="active">Categories</li>
        <li>Customers</li>
        <li>Reports</li>
        <li>Coupons</li>
        <li>Inbox</li>
      </ul>
    </div>
  );
};

export default Sidebar;

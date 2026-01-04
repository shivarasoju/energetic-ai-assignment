import { Bell, MessageSquare } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="admin-navbar">
      {/* Left */}
      <div className="nav-left">
        <h2 className="logo">
          <span>🛒</span> fastcart
        </h2>
      </div>

      <div className="nav-center">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-right">
        <Bell className="nav-icon" />
        <MessageSquare className="nav-icon" />

        <div className="profile-box">
          <div className="profile-circle">N</div>
          <span className="profile-name">Naga</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

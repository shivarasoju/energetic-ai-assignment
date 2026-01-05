import { Bell, MessageSquare } from "lucide-react";
import "./Navbar.css";
import AuthContext from "../../contex";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);

  useEffect(() => {
    if (!authUser) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setAuthUser(JSON.parse(storedUser));
      }
    }
  }, [authUser, setAuthUser]);

  return (
    <div className="admin-navbar">
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
          <div className="profile-circle">
            {authUser?.fullName?.charAt(0).toUpperCase()}
          </div>
          <span className="profile-name">{authUser?.fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

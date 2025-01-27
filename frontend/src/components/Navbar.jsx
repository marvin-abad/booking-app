import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

  const { user } = useContext(AuthContext);

  return (
    <div className="navbar border-b px-6 h-[84px]">
      <div className="navContainer flex items-center justify-between m-auto h-full">
        <Link to="/">
          <span className="logo ">Booking.com</span>
        </Link>
        {
          user ? user.username : (
            <div className="navItems flex gap-12">
              <Link to="/register">
                <button className="navButton cursor-pointer hover:text-amber-800 hover:border-b">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton cursor-pointer hover:text-amber-800 hover:border-b">Login</button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

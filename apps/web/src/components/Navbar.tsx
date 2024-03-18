
import { useSignOut } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate("/");
  };
  return (
    <nav className="sticky top-0 z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className=" py-3  mx-auto w-10/12">
        <div className="flex items-center justify-between">
          <Link to={"/dashboard"}>DeerHack</Link>
          <div>
            <ul className="flex gap-10">
              <li>
                <Link to={"/add-event"}>Add Events</Link>
              </li>
              <li>
                <Link to={"/scan-qr"}>Event List</Link>
              </li>
              <li className="cursor-pointer" onClick={logout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

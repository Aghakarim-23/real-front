import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  return (

    <div className="mt-10 flex gap-4  ml-10">
      
      {!user && (
        <>
          <Link to="/login" className="border-zinc-300 border px-2 rounded-md">
            Login
          </Link>
          <Link
            to="/register"
            className="border-zinc-300 border px-2 rounded-md"
          >
            Register
          </Link>
          <Link
            to="/user-list"
            className="border-zinc-300 border px-2 rounded-md"
          >
            User List
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;

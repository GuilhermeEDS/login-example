import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="bg-white flex flex-col px-3 md:px-10 py-3 mb-10 items-end">
      <button onClick={Logout} className="primary-btn max-w-56">
        <span className="flex flex-row justify-center">
          <svg
            className="h-6 w-6 md:hidden pr-1 md:pr-0"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
          Logout
        </span>
      </button>
    </header>
  );
};

export default Navbar;

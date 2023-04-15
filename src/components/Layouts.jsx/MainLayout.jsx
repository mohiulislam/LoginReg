import React from "react";
import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div className="h-screen bg-blue-950">
      <nav className="text-white bg-blue-950 flex items-center justify-end p-4 gap-10 border-b-2 border-blue-950 shadow-lg">
        <Link
          to={"/"}
          className="px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Login
        </Link>
        <Link
          to={"/Reg"}
          className="px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Registration
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default MainLayout;

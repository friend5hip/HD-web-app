import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <nav className="bg-blue-300">
        <div className="container mx-auto py-4 flex justify-between text-white">
          <h1>logo</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/todo">TODO</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto py-4">{children}</div>
      <footer className=" bg-gray-500">
        <div className="container mx-auto py-4 text-white">footer</div>
      </footer>
    </>
  );
}

export default Layout;

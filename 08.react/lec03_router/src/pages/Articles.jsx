import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "red",
    fontSize: 22,
  };
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/articles/1" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 1
          </NavLink>
          <NavLink to="/articles/1" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 2
          </NavLink>
          <NavLink to="/articles/1" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;

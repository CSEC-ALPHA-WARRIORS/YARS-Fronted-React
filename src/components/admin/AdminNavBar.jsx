import React from "react";
import "./adminStyle.scss";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

function AdminNavBar() {
  return (
    <nav className="admin-nav-bar">
      <div className="logo-header">
        <img src={Logo} alt="" />
        <h1>Astu</h1>
      </div>
      <div className="nav-links">
        <Link className="students1 admin-nav" to="/admin/students-list">
          Students
        </Link>
        <Link className="admins admin-nav" to="/admin/admins-list">
          Admins
        </Link>
        <Link className="courses admin-nav" to="/admin/course-list">
          Courses
        </Link>
        <Link className="registrations admin-nav" to="/admin/registration-list">
          Registrations
        </Link>
        <Link className="payments admin-nav" to="/admin/payment">
          Payments
        </Link>
      </div>
    </nav>
  );
}

export default AdminNavBar;

import React from 'react'
import './adminStyle.scss'
import { Link } from 'react-router-dom'
function AdminNavBar() {
    return (
        <nav>
            <h1>Astu</h1>
            <div className="nav-links">
                <Link to='/admin/students'>Students</Link>
                <Link to='/admin/admins'>Admins</Link>
                <Link to='/admin/courses'>Courses</Link>
                <Link to='/admin/registrations'>Registrations</Link>
                <Link to='/admin/payments'>Payments</Link>

            </div>
        </nav>
    )
}

export default AdminNavBar

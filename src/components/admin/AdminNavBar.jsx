import React from 'react'
import './adminStyle.scss'
import { Link } from 'react-router-dom'
function AdminNavBar() {
    return (
        <nav>
            <h1>Astu</h1>
            <div className="nav-links">
                <Link to='/admin/students-list'>Students</Link>
                <Link to='/admin/admins-list'>Admins</Link>
                <Link to='/admin/course-list'>Courses</Link>
                <Link to='/admin/registration-list'>Registrations</Link>
                <Link to='/admin/payment'>Payments</Link>

            </div>
        </nav>
    )
}

export default AdminNavBar

import React from 'react'
import AdminNavBar from '../../../components/admin/AdminNavBar'
import './studentsStyle.scss'
function Students() {
  return (
    <>
    <AdminNavBar />
      <div className='student-container'>
        <h1>Students</h1>
        <div className="students-list">
          <div className="table-head">
            <h2>#</h2>
            <h2>First Name</h2>
            <h2>Middle Name</h2>
            <h2>Last Name</h2>
            <h2>Email</h2>
            <h2>Phone Number</h2>
          </div>
          <div className="table-row">
            <h2>1</h2>
            <h2>John</h2>
            <h2>Mclain</h2>
            <h2>Doe</h2>
            <h2>johndoe@gmail.com</h2>
            <h2>Phone Number</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Students

import React from 'react'
import { Link } from 'react-router-dom'
import './adminStyle.scss'
function StudentRow() {
    return (
        <>
            <tbody>
                <td>1</td>
                <td ><Link className='stud-name' to='/admin/student-profile'>John</Link> </td>
                <td>Mclain</td>
                <td>Doe</td>
                <td>johndoe@gmail.com</td>
                <td>Phone Number</td>
            </tbody>
        </>
    )
}

export default StudentRow

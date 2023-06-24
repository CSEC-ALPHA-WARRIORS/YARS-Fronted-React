import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/button/button'

function AdminRow() {
    return (
        <>
            <tbody>
                <td>1</td>
                <td ><Link className='stud-name' to='/admin/admins-list'>John</Link> </td>
                <td>Mclain</td>
                <td>Doe</td>
                <td>johndoe@gmail.com</td>
                <td>Phone Number</td>
                <td><Button text="Delete" className="small-small-btn" /></td>
            </tbody>
        </>
    )
}

export default AdminRow

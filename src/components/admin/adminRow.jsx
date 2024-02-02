import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/button/button";
import axios from "axios";

function AdminRow({ id, delId, fname, mname, lname, email, phoneNumber }) {
	const handleClick = () => {
		axios
			.delete(`http://localhost:8000/api/admin/remove/${delId}`)
			.then((response) => {
				console.log(response);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<tbody>
				<td>{id}</td>
				<td>
					<Link className="stud-name" to="/admin/admins-list">
						{fname}
					</Link>{" "}
				</td>
				<td>{mname}</td>
				<td>{lname}</td>
				<td>{email}</td>
				<td>{phoneNumber}</td>
				<td>
					<Button
						text="Delete"
						onClick={handleClick}
						className="small-small-btn"
					/>
				</td>
			</tbody>
		</>
	);
}

export default AdminRow;

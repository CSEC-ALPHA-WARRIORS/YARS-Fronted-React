import React, { useEffect, useState } from "react";
import AdminNavBar from "../../../components/admin/AdminNavBar";
import RegistrationRow from "../../../components/admin/registrationRow";
import Footer from "../../../components/common/footer/footer";
import "./registrationListStyle.scss";
import axios from "axios";
function RegistrationList() {
  const [registrationList, setRegistrationList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/registrations")
      .then((response) => {
        setRegistrationList(response.data);
        console.log(registrationList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 

  return (
    <>
      <AdminNavBar />
      <div className="registration-container">
        <h1>Registrations</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>student id</th>
              <th>Year</th>
              <th>semester</th>
              <th>program</th>
              <th>level</th>
              <th>registered at</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          {registrationList.map((registers, index) => (
            <RegistrationRow
              key={registers.id}
              newId={index+1}
              id={registers.student_id}
              year={registers.year}
              semester={registers.semester}
              program={registers.program}
              level={registers.level}
              registered_at={registers.registered_at}
              status={registers.status}

            />
          ))}
        </table>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationList;

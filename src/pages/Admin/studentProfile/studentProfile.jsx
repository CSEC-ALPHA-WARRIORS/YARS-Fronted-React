import React from 'react'
import AdminNavBar from '../../../components/admin/AdminNavBar'
import ProfileImage from '../../../assets/images/pngwing.com.png'
import StudentProfileLabel from '../../../components/admin/studentProfileLabel'
import './studentProfile.scss'
function StudentProfile() {
    return (
        <>
            <AdminNavBar />
            <div className="student-profile-container">
                <div className="personal-information">
                    <h4>Personal Information</h4>
                    <div className="information">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="" />
                        </div>
                        <div className="text-information">
                            <div className="full-name">
                                <StudentProfileLabel label="Full Name" information="John" />
                                <StudentProfileLabel label="Middle Name" information="Smith" />
                                <StudentProfileLabel label="Last Name" information="Doe" />
                            </div>
                            <div className="full-name">
                                <StudentProfileLabel label="Email" information="John" />
                                <StudentProfileLabel label="Phone Number" information="Smith" />
                                <StudentProfileLabel label="Type" information="Doe" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="address-container">
                    <h4>Address</h4>
                    <div className="address-information">
                        <StudentProfileLabel label="Email" information="John" />
                        <StudentProfileLabel label="Phone Number" information="Smith" />
                        <StudentProfileLabel label="Type" information="Doe" />
                        <StudentProfileLabel label="Type" information="Doe" />
                    </div>
                </div>
                <div className="emergency-contact-container">
                    <h4>Emergency Contact</h4>
                    <div className="emergency-contact-texts">
                        <div className="address-row">
                            <StudentProfileLabel label="Type" information="Doe" />
                            <StudentProfileLabel label="Type" information="Doe" />
                            <StudentProfileLabel label="Type" information="Doe" />
                            <StudentProfileLabel label="Type" information="Doe" />
                        </div>
                        <div className="address-row">
                            <StudentProfileLabel label="Type" information="Doe" />
                            <StudentProfileLabel label="Type" information="Doe" />
                        </div>
                    </div>
                </div>
                <div className="educational-bg">
                    <h4>Address</h4>
                    <div className="educational-information">
                        <StudentProfileLabel label="Email" information="John" />
                        <StudentProfileLabel label="Phone Number" information="Smith" />
                        <StudentProfileLabel label="Type" information="Doe" />
                        <StudentProfileLabel label="Type" information="Doe" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentProfile

import React from 'react'
import './footerStyle.scss'
import HeaderText from '../../hero/HeaderText'
function Footer() {
    return (
        <div className="footer">
            <HeaderText className="white" text="Astu" />
            <div className="footer-informations">
                <div className="links foot">
                    <h1>LINKS</h1>
                    <a href=''>Home</a>
                    <a href='http://10.240.1.89/'>Portal</a>
                    <a href=''>About</a>
                    <a href=''>Campus Calender</a>
                    <a href=''>Developers</a>
                </div>
                <div className="socials foot">
                    <h1>SOCIALS</h1>
                    <a href='https://www.facebook.com/adamaastu/'>Facebook</a>
                    <a href='https://twitter.com/ASTU_OFFICIAL'>Twitter</a>
                    <a href='https://www.linkedin.com/school/adastu/?originalSubdomain=et'>LinkedIn</a>
                    <a href=''>Youtube</a>
                </div>
                <div className="contact foot">
                    <h1>CONTACT</h1>
                    <p>+251-22-211-3961</p>
                    <p>+251-221-100001</p>
                    <p>irccd@astu.edu.et</p>
                    <p>sar@astu.edu.et</p>
                </div>

            </div>
        </div>
    )
}

export default Footer

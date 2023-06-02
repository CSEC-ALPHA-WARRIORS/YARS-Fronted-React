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
                    <a href=''>Portal</a>
                    <a href=''>About</a>
                    <a href=''>Campus Calender</a>
                    <a href=''>Developers</a>
                </div>
                <div className="socials foot">
                    <h1>SOCIALS</h1>
                    <a href=''>Facebook</a>
                    <a href=''>Twitter</a>
                    <a href=''>LinkedIn</a>
                    <a href=''>Youtube</a>
                </div>
                <div className="contact foot">
                    <h1>CONTACT</h1>
                    <p>+25198876543</p>
                    <p>+25198876543</p>
                    <p>someoneastu.edu.et</p>
                    <p>admin@astu.edu.et</p>
                </div>

            </div>
        </div>
    )
}

export default Footer

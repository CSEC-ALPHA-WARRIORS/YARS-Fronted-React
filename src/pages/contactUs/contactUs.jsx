import React from "react";
import NavBar from "../../components/common/navBar/navBar";
import Footer from "../../components//common/footer/footer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "./contactUsStyle.scss";
import InputField from "../../components/common/inputField/inputField";
import Button from "../../components/common/button/button"
function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <h2>Contacts Us</h2>
        <div className="right-left-container">
          <div className="left-side flex">
            <div className="contacts">
              <div className="icons">
                <BsFillTelephoneFill className="icon" />
              </div>
              <div className="contact-label">
                <h3>Call</h3>
                <p>+251908985812</p>
              </div>
            </div>
            <div className="contacts">
              <div className="icons">
                <MdEmail className="icon" />
              </div>
              <div className="contact-label">
                <h3>Location</h3>
                <p>+Adama, Ethiopia</p>
              </div>
            </div>
            <div className="contacts">
              <div className="icons">
                <SiGmail className="icon" />
              </div>
              <div className="contact-label">
                <h3>Email</h3>
                <p>sar@astu.edu.et</p>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.281962126924!2d39.2918799741482!3d8.568863696023644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20%2CASTU%2C%20Adama%20%2CEthiopia!5e0!3m2!1sen!2set!4v1687811786250!5m2!1sen!2set"
                // width="600"
                // height="450"
              ></iframe>
            </div>
          </div>
          <div className="right-side">
            <div className="name-email">
              <InputField
                label="Full Name"
                placeholder="Enter Your Full Name"
                className="flex1"
              />
              <InputField label="Email" placeholder="Enter Your Email" className="flex1"/>
            </div>
            <InputField label="Subject" placeholder="Enter a Subject" />
            <div className="text-area">
              <label htmlFor="Message">Message</label>
              <textarea name="" id="Message" placeholder="Enter Your Message"></textarea>
            </div>
            <div className="btn-container">
            <Button text="Send" className="small-btn white blue-black-bg center-btn"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

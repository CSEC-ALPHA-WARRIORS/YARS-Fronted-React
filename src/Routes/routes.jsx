import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroPage from '../pages/heroPage/heroPage';
import RegisterPage from '../pages/registerPage/registerPage';
import PaymentPage from '../pages/paymentPages/paymentChoices/paymentChoices';
import PaymentSuccessful from '../pages/paymentPages/paymentSuccessful/paymentSuccessful';
import ManualPayment from '../pages/paymentPages/manualPayment/manualPayment';
import PaymentChoices from '../pages/paymentPages/paymentChoices/paymentChoices';
import Curriculum from '../pages/curriculum/curriculum';
import ContactUs from '../pages/contactUs/contactUs';
import ChapaPayment from '../pages/paymentPages/chapaPayment/chapaPayment';
import StudentPortal from '../pages/studentPortal/studentPortal';
import Login from '../pages/Admin/loginPage/login';
import StudentList from '../pages/Admin/studentList/studentList';
import StudentProfile from '../pages/Admin/studentProfile/studentProfile';
import AdminList from '../pages/Admin/adminList/adminList';
import CourseList from '../pages/Admin/courseList/courseList';
import RegistrationList from '../pages/Admin/registrationList/registrationList';
import PaymentList from '../pages/Admin/paymentList/paymentList';
function RoutePage() {
    return (
        <Routes >
            <Route exact path='/' Component={HeroPage} />
            <Route exact path='/register' Component={RegisterPage} />
            <Route exact path='/student-portal' Component={StudentPortal} />
            <Route exact path='/curriculum' Component={Curriculum} />
            <Route exact path='/contact-us' Component={ContactUs} />

            {/* Payment Routes */}

            <Route exact path='/payment' Component={PaymentChoices} />
            <Route exact path='/manual-payment' Component={ManualPayment} />
            <Route exact path='/chapa-payment' Component={ChapaPayment} />
            <Route exact path='/payment-successful' Component={PaymentSuccessful} />

            {/* Admin Routes */}

            <Route exact path='/admin' Component={Login}/>
            <Route path='/admin/students-list' Component={StudentList} />
            <Route path='/admin/student-profile' Component={StudentProfile} />
            <Route path='/admin/admins-list' Component={AdminList}/>
            <Route path='/admin/course-list' Component={CourseList}/>
            <Route path='/admin/registration-list' Component={RegistrationList}/>
            <Route path='/admin/payment' Component={PaymentList}/>
        </Routes>
    )
}


export default RoutePage;
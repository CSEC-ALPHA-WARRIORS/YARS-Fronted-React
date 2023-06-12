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
import Students from '../pages/Admin/studentProfile/students';
function RoutePage() {
    return (
        <Routes >
            <Route exact path='/' Component={HeroPage} />
            <Route exact path='/register' Component={RegisterPage} />
            <Route exact path='/student-portal' Component={StudentPortal} />
            <Route exact path='/curriculum' Component={Curriculum} />
            <Route exact path='/payment' Component={PaymentChoices} />
            <Route exact path='/manual-payment' Component={ManualPayment} />
            <Route exact path='/chapa-payment' Component={ChapaPayment} />
            <Route exact path='/payment-successful' Component={PaymentSuccessful} />
            <Route exact path='/contact-us' Component={ContactUs} />
            <Route exact path='/admin' Component={Login}/>
            <Route path='/admin/students' Component={Students} />
        </Routes>
    )
}


export default RoutePage;
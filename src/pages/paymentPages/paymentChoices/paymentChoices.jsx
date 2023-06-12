import React from 'react'
import NavBar from '../../../components/common/navBar/navBar'
import Footer from '../../../components/common/footer/footer'
import Button from '../../../components/common/button/button'
import axios from 'axios'
import './paymentChoiceStyle.scss'
import { Link } from 'react-router-dom'
function PaymentChoices() {


    const pay = () => {
        axios.post('')
    }

    return (
        <>
            <NavBar />
            <div className='payment-choices-container'>
                <h1>Payment</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas suspendisse parturient bibendum dui urna imperdiet sit pulvinar. Libero ut sit potenti pellentesque mattis id nunc adipiscing. Massa lacinia euismod nibh scelerisque dignissim. Massa tristique imperdiet lorem tincidunt ut. Et hac ornare dolor ac urna sodales netus proin quisque. Augue neque imperdiet urna posuere porttitor. Faucibus bibendum turpis dui quis tortor pellentesque id dignissim. Quis nibh.</p>
                <div className='payment-buttons'>
                    <Link to="/chapa-payment"> <Button className="white blue-bg" text="PAY WITH CHAPA" /></Link>
                    <Link to="/manual-payment"><Button className="white blue-bg" text='MANUAL PAYMENT' /></Link>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default PaymentChoices

import React from 'react'
import NavBar from '../../../components/common/navBar/navBar'
import Footer from '../../../components/common/footer/footer'
import Button from '../../../components/common/button/button'
import './paymentSuccessculStyle.scss'
function PaymentSuccessful() {
    return (
        <>
            <NavBar />
            <div className='payment-successful-container'>
                <h1>Your Registration Application is Under Review</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas suspendisse parturient bibendum dui urna imperdiet sit pulvinar. Libero ut sit potenti pellentesque mattis id nunc adipiscing. Massa lacinia euismod nibh scelerisque dignissim. Massa tristique imperdiet lorem tincidunt ut. Et hac ornare dolor ac urna sodales netus proin quisque. Augue neque imperdiet urna posuere porttitor. Faucibus bibendum turpis dui quis tortor pellentesque id dignissim. Quis nibh.</p>
                <div className='Successful-buttons'>
                    <Button className="white blue-bg" text="THANKS FOR CHOOSING US" />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccessful

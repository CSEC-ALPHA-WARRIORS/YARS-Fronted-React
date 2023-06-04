import React from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import NavBar from '../../../components/common/navBar/navBar'
import Footer from '../../../components/common/footer/footer'
import InputField from '../../../components/common/inputField/inputField'
import './manualPaymentStyle.scss'
import Button from '../../../components/common/button/button'
import { Link } from 'react-router-dom'
function ManualPayment() {
    return (
        <>
            <NavBar />
            <div className='Manual-payment-container'>
                <h1>Manual Payment</h1>
                <div className="inputfield-container">
                    <InputField label="Bank Name" placeholder="Enter a Bank you complete your Payment" />
                    <InputField label="Account Number" placeholder="Enter your bank Account" />
                </div>
                <div className="upload-receipt-container">
                    <label htmlFor="">Upload Receipt</label>
                    <label className='upload-receipt' htmlFor="upload-receipt"><BiCloudUpload className='upload-icon' />
                        <h2>Upload</h2>
                    </label>
                    <input type="file" id='upload-receipt' />
                </div>
                <Link to='/payment-successful'> <Button text="FINISH REGISTRATION" className='white blue-bg small-btn' /></Link>
            </div>
            <Footer />
        </>
    )
}

export default ManualPayment

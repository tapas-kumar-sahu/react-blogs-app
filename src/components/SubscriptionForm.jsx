import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionForm = () => {

    const[inputValue, setInputValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(inputValue){
            toast.success("Subscription Successfull!")
        }else{
            toast.error("enter valid email")
        }
        setInputValue("");
    }

    return (
        <>
            <div className='subscription_form mb-5'>
                <form className="d-flex flex-column flex-md-row" role="search" onSubmit={submit}>
                    <input className="form-control me-2"
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="btn-primary-blue mt-3 mt-md-0" type="submit">Subscribe</button>
                </form>
            </div>

            <ToastContainer position="top-center" />
        </>
    )
}

export default SubscriptionForm
import React from 'react';
import subscriptionImg from '../assets/subscription-img.png';
import SubscriptionForm from './SubscriptionForm';

const Subscription = () => {
    
  return (
    <>
        <div className="subscription_wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 d-flex flex-column text-center justify-content-center align-items-center">
                        <img src={subscriptionImg} className='img-fluid mb-4' alt="subscription-img" />
                        <h2 className='subscription_title mb-2'>Subscribe For the lastest updates</h2>
                        <p className='paragraph-1'>Subscribe to newsletter and never miss the new post every week.</p>
                        <SubscriptionForm />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Subscription;
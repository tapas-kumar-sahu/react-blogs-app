import React from 'react';
import bannerImg from '../assets/banner-img.png';
import SubscriptionForm from './SubscriptionForm';

const Banner = () => {

  return (
    <>
        <div className='banner_wrapper'>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-lg-7 order-1 order-lg-0">
                        <h1 className='heading1 mb-4'>
                            Hi, I’m Tapas <br />
                            Front end dev
                        </h1>
                        <div className='banner_paragraph mb-5'>
                            <p className='paragraph-1'>
                                On this blog I share tips and tricks, frameworks, projects, tutorials, etc
                                Make sure you subscribe to get the latest updates
                            </p>
                        </div>
                        {/* subscription-form */}
                        <SubscriptionForm />
                    </div>

                    <div className="col-lg-5">
                        <img src={bannerImg} className='img-fluid' alt="banner-img" />
                    </div>
                </div>
            </div>
            {/* float-arrows */}
            <a href='#blogs' className='down_arrow d-none d-lg-flex'>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 9L17 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 9L17 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>            
    </>
  )
}

export default Banner
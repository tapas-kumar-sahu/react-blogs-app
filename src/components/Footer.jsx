import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>© {new Date().getFullYear()} Tapas.blog</p> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;
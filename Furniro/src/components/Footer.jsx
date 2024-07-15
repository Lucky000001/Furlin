// import React from 'react';
import { Link } from 'react-router-dom';



const emailInputStyle = {
  borderBottom: '1px solid #000',
  paddingLeft: 0
};

const subscribeButtonStyle = {
  borderBottom: '1px solid #000',
  textDecoration: 'none',
  color: 'black'
  
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
};

const Footer = () => {
  return (
    <footer className="bg-light text-dark p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="font-weight-bold"><b>Funiro.</b></h5>
            <p className="text-muted">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="col-md-3">
            
            <div className='mb-5'>
            <h6 className="text-muted">Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark" style={linkStyle}>Home</Link></li>
              <li><Link to="/shop" className="text-dark" style={linkStyle}>Shop</Link></li>
              <li><Link to="/about" className="text-dark" style={linkStyle}>About</Link></li>
              <li><Link to="/contact" className="text-dark" style={linkStyle}>Contact</Link></li>
            </ul>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <h6 className="text-muted">Help</h6>
            <ul className="list-unstyled">
              <li><Link to="/payment-options" className="text-dark" style={linkStyle}>Payment Options</Link></li>
              <li><Link to="/returns" className="text-dark" style={linkStyle}>Returns</Link></li>
              <li><Link to="/privacy-policies" className="text-dark" style={linkStyle}>Privacy Policies</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h6 className="text-muted">Newsletter</h6>
            <form >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control-plaintext"
                  placeholder="Enter Your Email Address"
                  style={emailInputStyle}
                />
              </div>
              <button type="submit" className="btn btn-link p-0" style={subscribeButtonStyle}>
                <b>SUBSCRIBE</b>
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="text-muted mb-0">&copy; 2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

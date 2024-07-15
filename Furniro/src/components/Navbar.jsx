


// import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav-box navbar-light bg-light '>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <Link className="navbar-brand p-1" to="/"><b>FurLinco</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3 py-1" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-1" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-1" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 py-1" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className='rt-navi d-none d-lg-flex justify-content-center align-items-center px-2 py-1'>
            <div className='user-i  px-3 py-1'><i className="fa-regular fa-user"></i></div>
            <div className='glass-i  px-3 py-1'><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className='heart-i  px-3 py-1'><i className="fa-regular fa-heart"></i></div>
            <div className='cart-i  px-3 py-1'><i className="fa-solid fa-cart-shopping"></i></div>
          </div>
        </div>
      </div>
    </nav>
    <div className=' m-auto  rt-navi d-flex justify-content-center align-items-center d-lg-none  px-2 py-1'>
            <div className='d-flex w-75 ms-5 justify-content-center align-items-center'>
            <div className='user-i w-25 px-3 py-1  justify-content-center align-items-center'><i className="fa-regular fa-user m-auto "></i></div>
            <div className='glass-i w-25 px-3 py-1  justify-content-center align-items-center'><i className="fa-solid fa-magnifying-glass m-auto "></i></div>
            <div className='heart-i w-25 px-3 py-1  justify-content-center align-items-center'><i className="fa-regular fa-heart m-auto "></i></div>
            <div className='cart-i w-25 px-3 py-1  justify-content-center align-items-center'><i className="fa-solid fa-cart-shopping m-auto "></i></div>
            </div>
          </div>
    </div>
  );
}

export default Navbar;




















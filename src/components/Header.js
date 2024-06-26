import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping over 100$ & Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Contact Us: <a className="text-white" href="tel:+91 7021929331">+91 7021929337</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className='text-white' to='/'>
                  Anon
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search for Anything..." aria-label="Search for Anything..." aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white header-upper-nav-links' to='/compare-product'>
                    <img src="images/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white header-upper-nav-links' to='/wishlist'>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white header-upper-nav-links' to='/login'>
                    <img src="images/user.svg" alt="user" />
                    <p className='mb-0'>Login</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center text-white header-upper-nav-links'>
                    <img src="images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column '>
                      <span className='badge bg-white text-dark'>
                        0
                      </span>
                      <p className='mb-0'>$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex algin-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt="" /><span className='me-5 d-inline-block'>Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="/">Apple</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Samsung</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Oneplus</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center header-bottom-nav-links nav-bottom-pages-tabs ">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/store'>Products</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
    )
}

export default Header;
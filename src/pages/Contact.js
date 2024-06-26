import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi';
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}/>
      <BreadCrumb title='Contact'/>
      <Container class='contact-wrapper home-wrapper-2 py-5'>
        <div className="row">
            <div className="col-12">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d145567.6250131441!2d-73.87432692961693!3d40.70363397787587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2 Times%20 Square!5e0!3m2!1 sen!2sin!4v1697194351129!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  className='border-0 w-100'
                  allowFullScreen=""
                  loading="lazy"
                  title="Anon's Office"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name'/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email'/>
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments...'></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Suite 300, Building 5, Irving, New York USA, Postcode: 75039
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel: +91 7021929337">7021929337</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:318aryank@gmail.com">customer_support@anon.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className="mb-0">Monday - Friday, 9:00 - 7:00</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

const RefundPolicy = () => {
  return (
    <>
        <Meta title={"Refund Policy"}/>
        <BreadCrumb title='Refund Policy'/>

        <Container class="policy-wrapper home-wrapper-2 py-5">
  <div className="row">
    <div className="col-12">
      <div className="policy">
        <div>
          <h5 className="title">Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?
          </p>
        </div>

        <div>
          <h5 className="title">Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?
          </p>
        </div>

        <div>
          <h5 className="title">Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?
          </p>
        </div>
      </div>
    </div>
  </div>
</Container>;

    </>
  )
}

export default RefundPolicy
import Link from 'next/link';
import React, { RefAttributes, useState } from 'react';
import Template1 from '../../assets/images/templates/01.svg';
import Template2 from '../../assets/images/templates/02.svg';
import Template3 from '../../assets/images/templates/03.svg';
import Template4 from '../../assets/images/templates/04.svg';
import Template5 from '../../assets/images/templates/05.svg';
import Template6 from '../../assets/images/templates/06.svg';
import Template7 from '../../assets/images/templates/07.svg';
import Template8 from '../../assets/images/templates/08.svg';
import Template9 from '../../assets/images/templates/09.svg';
import Template10 from '../../assets/images/templates/10.svg';
import Template11 from '../../assets/images/templates/11.svg';
import Template12 from '../../assets/images/templates/12.svg';

const ModalGrid1 = () => {
  return (
    <>
      <div className="template_card_container">
        <Template1 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container ">
        <Template2 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template3 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template4 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template5 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template6 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template7 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template8 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template9 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template10 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template11 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
      <div className="template_card_container">
        <Template12 />
        <Link href={'/modalgenerate'}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ModalGrid1;

import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa ex, molestias est veniam dicta qui aperiam. Fuga ullam omnis
            asperiores tempore quod doloribus, commodi cupiditate, blanditiis
            architecto ad ipsum!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            iusto vitae in nihil error quo veritatis! Impedit itaque, cum porro
            numquam laborum excepturi culpa sequi id illum tempora veritatis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SouleyShop</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="all payments methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

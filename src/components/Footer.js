import Image from "next/image";
import logo from "../../public/images/logo.png";
import React from "react";
import {
  FaArrowRight,
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <Image className="" src={logo} width={141} height={42} alt="logo" />
          </div>
          <div class="col-md-2 col-4">
            <h5> About</h5>
            <div>
              <h6>Home</h6>
              <h6>About Us</h6>
              <h6>Services</h6>
              <h6>Solutions</h6>
            </div>
          </div>
          <div class="col-md-2 col-4">
            <h5> Information</h5>
            <div>
              <h6>Contacts</h6>
              <h6>Our team</h6>
              <h6>Blog</h6>
              <h6>FAQ</h6>
            </div>
          </div>
          <div class="col-md-2 col-4">
            <h5> Service</h5>
            <div>
              <h6>Pages</h6>
              <h6>Elements</h6>
              <h6>Site map</h6>
              <h6>Pricing</h6>
              <h6>FAQ</h6>
            </div>
          </div>
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <div className="row justify-content-between mt-4">
          <div className="col-md-6">
            <h4 className="mb-3 fw-bold">Contacts</h4>
            <div className="row">
              <div className="col-md-6">
                <p>+1 601-201-5580</p>
                <h5>
                  ensome@info.co.us
                  <FaArrowRight className="ms-2" />
                </h5>
              </div>
              <div className="col-md-6">
                <p>+1 601-201-5580</p>
                <h5>
                  ensome@info.co.us
                  <FaArrowRight className="ms-2" />
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Social</h4>
            <div className="fs-4">
              <a href="#">
                <FaFacebook className="me-3" />
              </a>
              <a href="#">
                <FaTwitter className="me-3" />
              </a>
              <a href="#">
                <FaLinkedinIn className="me-3" />
              </a>
              <a href="#">
                <FaYoutube className="me-3" />
              </a>
              <a href="#">
                <FaDribbble className="me-3" />
              </a>
              <a href="#">
                <FaBehance className="" />
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-2">
            <p>
              Privacy policy
              <FaArrowRight className="ms-2" />
            </p>
          </div>
          <div className="col-md-2">
            <p>
              Terms of us
              <FaArrowRight className="ms-2" />
            </p>
          </div>
          <div className="col-md-4">
            <p>&copy; 2022 Ensome. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

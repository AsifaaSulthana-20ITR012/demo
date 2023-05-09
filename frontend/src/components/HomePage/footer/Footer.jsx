import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-grid-system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import visa from '../../../asserts/visa.png'
import paypal from '../../../asserts/paypal.webp'
import mastercard from '../../../asserts/mastercard.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
    return (
        <div id='footer'>
        <footer >
            <div className="container1" style={{ padding: '15px' }}>
                <div className="row row-40 row-md-50 justify-content-xl-between">
                    <div className="col-sm-6 col-lg-4 wow fadeInRight" style={{ padding: '10px' }}>
                        <h2>Visit our farm</h2>
                        <p><LocationOnIcon /> 9, Sanjay's Fine Foods, <br /> Mosikeeranar Street 4th, <br /> Erode - 638001</p>
                        <ul >
                            <li><AccessTimeIcon /> <span>Weekdays:</span><span>08:00am - 08:00pm</span></li>
                            <li><AccessTimeIcon /> <span>Weekends:</span><span>10:00am - 06:00pm</span></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-4" style={{ padding: '10px' }}>
                        <h2>Quick links</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <li>History</li>
                                    <li>FAQ</li>
                                    <li>Products</li>
                                    <li>Events</li>
                                    <li>Blog</li>
                                </Col>
                                <Col>
                                    <ul >
                                        <li>Blog</li>
                                        <li>Organic Products</li>
                                        <li>Our Smoothies</li>
                                        <li>Gift Vouchers</li>
                                        <li>Boxes</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s" style={{ padding: '10px' }}>
                        <h2 >Get in touch</h2>
                        <div ></div>
                        <p >We are always ready  to answer any questions you may have or help you select healthy products.</p>
                        <div >
                            <h5>Shop now</h5>
                            <h5>Contact us</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="container1" style={{ paddingTop: '0px' }}>
                    <div className="row row-10 row-sm-30 align-items-center justify-content-sm-between">
                        <div className="col-sm-auto col-lg-4 text-lg-left" >
                            <div className="group-xs group-middle fade-in-image" style={{display:'flex', justifyContent:'center'}}>
                                <img src={visa} alt="" width="50" height="25" style={{ padding: '0px 4px' }} />
                                <img src={mastercard} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '3px' }} />
                                <img src={paypal} alt="" width="50" height="25" style={{ padding: '0px 3px', borderRadius: '2px' }} />
                            </div>
                        </div>
                        <div className="col-sm-auto col-lg-4" style={{ padding: '15px 0px' }}>
                            <span ><FacebookIcon style={{ height: '25px', width: '30px' }} /> <InstagramIcon style={{ height: '25px', width: '30px' }} /> <TwitterIcon style={{ height: '25px', width: '30px' }} /> <GoogleIcon style={{ height: '25px', width: '30px' }} /> </span>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="rights">
                                <span>©&nbsp; </span>
                                <span className="copyright-year">3033</span>
                                <span>&nbsp;</span><span>Dry Fruits</span>
                                <span>.&nbsp; All rights reserved.</span>
                                <span>&nbsp;</span>
                                <h4 href="privacy-policy.html">Privacy Policy</h4>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
        </div>
    )
}

export default Footer
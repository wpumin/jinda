import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import TestPic1 from '../../images/testimonials/pic1.jpg';
import TestPic2 from '../../images/testimonials/pic2.jpg';
import TestPic3 from '../../images/testimonials/pic3.jpg';
import TestPic4 from '../../images/testimonials/pic4.jpg';
import Icon1 from '../../images/icon/contact/icon1.png';
import Icon2 from '../../images/icon/contact/icon2.png';
import Icon3 from '../../images/icon/contact/icon3.png';

class Client extends Component {

	render() {
		return (
			<>
				<Header1 />

				{/* <!-- Content --> */}
				<div className="page-content bg-white">

					<div className="page-banner ovbl-dark parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Our Client</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Our Client</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="content-block" id="content-area">

						<div className="section-area bg-gray section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-7">
										<div className="heading-bx">
											<h6 className="title-ext m-b0">Partners</h6>
											<h3 className="title-head m-b0">Our Clients</h3>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
										</div>
										<div className="row m-b30">
											<div className="col-md-12 m-b30">
												<div className="testimonial-bx style2 shadow">
													<div className="testimonial-content">
														<h5 className="title">Best product ever !</h5>
														<div className="testimonial-rating">
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
													</div>
													<div className="client-info">
														<div className="testimonial-thumb">
															<img src={TestPic1} alt="" />
														</div>
														<div className="testimonial-info">
															<h6 className="name">Michel Bohman</h6>
															<p>Programer</p>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 m-b30">
												<div className="testimonial-bx style2 shadow">
													<div className="testimonial-content">
														<h5 className="title">Best Services</h5>
														<div className="testimonial-rating">
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
													</div>
													<div className="client-info">
														<div className="testimonial-thumb">
															<img src={TestPic2} alt="" />
														</div>
														<div className="testimonial-info">
															<h6 className="name">Sonar Moyna</h6>
															<p>Art Director</p>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 m-b30">
												<div className="testimonial-bx style2 shadow">
													<div className="testimonial-content">
														<h5 className="title">Great Support</h5>
														<div className="testimonial-rating">
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
													</div>
													<div className="client-info">
														<div className="testimonial-thumb">
															<img src={TestPic3} alt="" />
														</div>
														<div className="testimonial-info">
															<h6 className="name">Kalina Mollika</h6>
															<p>Client</p>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="testimonial-bx style2 shadow">
													<div className="testimonial-content">
														<h5 className="title">Best product</h5>
														<div className="testimonial-rating">
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
															<span className="fa fa-star"></span>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
													</div>
													<div className="client-info">
														<div className="testimonial-thumb">
															<img src={TestPic4} alt="" />
														</div>
														<div className="testimonial-info">
															<h6 className="name">Michel Bohman</h6>
															<p>Programer</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-5">
										<aside className="sticky-top left-border-1">
											<div className="widget">
												<h6 className="widget-title">Our Inner Pages</h6>
												<ul className="service-list style-2">
													<li><Link to="about">About Us <i className="las la-question-circle"></i></Link></li>
													<li><Link to="services-1">Our Services <i className="las la-cog"></i></Link></li>
													<li><Link to="awards">Awards<i className="las la-trophy"></i></Link></li>
													<li><Link to="job-career">Job & Career<i className="las la-user-plus"></i></Link></li>
													<li><Link to="partners">Partners<i className="las la-handshake"></i></Link></li>
													<li><Link to="pricing">Pricing<i className="las la-hand-holding-usd"></i></Link></li>
													<li><Link to="appointment">Appointment<i className="las la-address-card"></i></Link></li>
													<li><Link to="case-study">Case Study<i className="las la-business-time"></i></Link></li>
													<li className="active"><Link to="client">Clients<i className="las la-user-circle"></i></Link></li>
													<li><Link to="faq-1">Faq<i className="las la-quote-left"></i></Link></li>
												</ul>
												<Link to="get-in-touch" className="btn btn-block m-t20">Get In Touch</Link>
											</div>
											<div className="widget">
												<h6 className="widget-title">Contact Us</h6>
												<ul className="contact-infolist">
													<li>
														<img src={Icon1} alt="" className="mCS_img_loaded" />
														<h6 className="contact-title">Contact Number</h6>
														<p>+001 123 456 790 <br />(02)  3424 44 00</p>
													</li>
													<li>
														<img src={Icon2} alt="" className="mCS_img_loaded" />
														<h6 className="contact-title">Email Address</h6>
														<Link to="#">info@yourdomain.com</Link><br />
														<Link to="#">example@support.com</Link>
													</li>
													<li>
														<img src={Icon3} alt="" className="mCS_img_loaded" />
														<h6 className="contact-title">Address</h6>
														<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
													</li>
												</ul>
											</div>
										</aside>
									</div>
								</div>

							</div>
						</div>

						<div className="section-area section-sp2 bg-white">
							<div className="container wow fadeIn" data-wow-delay="0.8s">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Partner</h6>
									<h2 className="title-head m-b0">Partners & Clients</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<ClientLogo />
							</div>
						</div>

					</div>

				</div>

				<Footer1 />

			</>
		);
	}
}

export default Client;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from "../../../images/logo-white.png"
import IconImg1 from "../../../images/icon/contact/icon1.png"
import IconImg2 from "../../../images/icon/contact/icon2.png"
import IconImg3 from "../../../images/icon/contact/icon3.png"

class Footer1 extends Component {
	render() {
		return (
			<>
				{/* <!-- Footer ==== --> */}
				<footer className="footer-style2">
					<div className="footer-top bt0">
						<div className="container">
							<div className="row align-items-center footer-info">
								<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg3} alt="" /></span>
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Adresse</h5>
											<p>Kettershauser Str. 20 89299 Unterroth</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg1} alt="" /></span>
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Kontakt Nummer</h5>
											<p>07343/9223493 <br />0151/55659129</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-sm-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg2} alt="" /></span>
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Email Adresse</h5>
											<p>Info@jinda.eu </p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 text-left text-lg-right">
									<Link to="contact" className="btn btn-long d-sm-inline-block">Kontakt Uns</Link>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-12 col-lg-3 col-md-5 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">DIENSTLEISTUNGEN</h5>
										<ul>
											<li><Link to="about"><span>Persönliche Beratung</span></Link></li>
											<li><Link to="about"><span>Kreative Werke</span></Link></li>
											<li><Link to="about"><span>Fotoservice</span></Link></li>
											<li><Link to="about"><span>Beantragung Web-Adresse</span></Link></li>
											<li><Link to="about"><span>Einrichtung E-Mail kontos</span></Link></li>
											<li><Link to="about"><span>Pflege Ihrer Website</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-md-7 col-sm-6">
									<div className="widget list-2">
										<h5 className="footer-title">UNTERNEHMEN</h5>
										<ul>
											<li><Link to="/">Zuhause</Link></li>
											<li><Link to="about">Über Uns</Link></li>
											<li><Link to="pricing">Preise</Link></li>
											<li><Link to="impressum">Impressum</Link></li>
											<li><Link to="contact">Kontakt Uns</Link></li>
											<li><Link to="team">Unser Team</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-5 col-md-12 col-sm-12">
									<div className="widget widget_info">
										<h5 className="footer-title">BESUCHEN SIE UNSER STUDIO AT</h5>
										<p>Wöchentliche Breaking News-Analyse und Schneide Cutting <br />Ratschläge zur Jobsuche.</p>
										<form className="subscribe-form m-b20" action="/">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Adresse" type="email" />
												<div className="input-group-append">
													<button name="submit" value="Submit" type="submit" className="btn btn-block radius-sm">Abonnieren</button>
												</div>
											</div>
										</form>
										<ul className="list-inline ft-social-bx">
											<li><Link to="#" className="btn button-sm"><i className="fa fa-facebook"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i className="fa fa-youtube"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i className="fa fa-linkedin"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
									<p className="m-b0">Copyright © 2021
										<img src={LogoWhite} className="footer-b-logo m-lr5" width="50" alt="" />
										All Rights Reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-right">
									<ul className="link-inline">
										<li><Link to="/">Zuhause</Link></li>
										<li><Link to="about">Über Uns</Link></li>
										<li><Link to="impressum">Impressum</Link></li>
										<li><Link to="contact">Kontakt Uns</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer1;

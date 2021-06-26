import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import Awards1 from '../../images/awards/pic1.jpg';
import Awards2 from '../../images/awards/pic2.jpg';
import Awards3 from '../../images/awards/pic3.jpg';
import AboutPic6 from '../../images/about/pic6.jpg';
import AboutPic8 from '../../images/about/pic8.jpg';
import AboutPic9 from '../../images/about/pic9.jpg';
import AboutPic10 from '../../images/about/pic10.jpg';
import Sign from '../../images/sign.png';

class CompanyHistory extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Company History</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Company History</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Best Awards</h6>
									<h2 className="title-head m-b0">Best Industrial Awards</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards1} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Start Journey 1981</h5>
												<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards2} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Best Industrial Awards 2007</h5>
												<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards3} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Best Awards 2018</h5>
												<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-area section-sp2 bg-white">
							<div className="container">		
								<div className="timeline-view">
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx">1892</div>
												<h6>VISION TO PLAN</h6>
												<h4>Iterative approaches</h4>
												<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
											</div>
										</div>
										<div className="timeline-content">
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</p>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic8} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic9} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic10} alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx">1957</div>
												<h6>PLAN TO MARKET</h6>
												<h4>Customer service</h4>
												<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
											</div>
										</div>
										<div className="timeline-content">
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</p>
											<div className="skillbar-box">
												<h6 className="title">Plan to Market</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"96%"}}></p>
													<span className="skill-bar-percent">96%</span>
												</div>
											</div>
											<div className="skillbar-box">
												<h6 className="title">Market to Growth</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"92%"}}></p>
													<span className="skill-bar-percent">92%</span>
												</div>
											</div>
											<div className="skillbar-box">
												<h6 className="title">Customer service</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"79%"}}></p>
													<span className="skill-bar-percent">79%</span>
												</div>
											</div>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
											<div className="row">
												<div className="col-md-6 m-b30">
													<img src={AboutPic9} alt=""/>
												</div>
												<div className="col-md-6 m-b30">
													<img src={AboutPic8} alt=""/>
												</div>
											</div>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx">2004</div>
												<h6>PLAN TO MARKET</h6>
												<h4>Visualize quality</h4>
												<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
											</div>
										</div>
										<div className="timeline-content">
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</p>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
											<div className="row">
												<div className="col-md-12 m-b30">
													<img src={AboutPic6} alt=""/>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx">2018</div>
												<h6>PLAN TO MARKET</h6>
												<h4>Visualize quality</h4>
												<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
											</div>
										</div>
										<div className="timeline-content">
											<div className="row">
												<div className="col-md-6">
													<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.</p>
												</div>
												<div className="col-md-6">
													<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
											<div className="sign-bx">
												<div className="sign-img">
													<img src={Sign} alt=""/>
												</div>
												<div className="author-bx">
													<h5 className="title">Robert Smith</h5>
													<span>CEO AND Founder</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-gray">
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

export default CompanyHistory;
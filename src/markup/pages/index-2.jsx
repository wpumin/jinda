import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Layout
import Header2 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';

// Elements
import Slider from '../elements/slider/slider2';
import BlogSlider from '../elements/blog/blog-slider';
import ProjectSlider7 from '../elements/project-slider/project-slider-7';
import Testimonial3 from '../elements/testimonial/testimonial3';
import Count from '../elements/counter/counter-sensor';

// Images
import BackBg1 from "../../images/background/bg1.png"
import BackBg2 from "../../images/background/bg2.png"
import BackBg4 from "../../images/background/bg4.jpg"
import AboutPic14 from "../../images/about/pic14.jpg"
import AboutPic15 from "../../images/about/pic15.jpg"
import ServicesPic1 from "../../images/our-services/services-1/pic1.jpg"
import ServicesPic2 from "../../images/our-services/services-1/pic2.jpg"
import ServicesPic3 from "../../images/our-services/services-1/pic3.jpg"
import ServicesPic4 from "../../images/our-services/services-1/pic4.jpg"
import ServicesPic5 from "../../images/our-services/services-1/pic5.jpg"
import ServicesPic6 from "../../images/our-services/services-1/pic6.jpg"
import PortImg1 from "../../images/portfolio/portfolio-3/image_1.jpg"
import PortImg2 from "../../images/portfolio/portfolio-3/image_2.jpg"
import PortImg3 from "../../images/portfolio/portfolio-3/image_3.jpg"
import PortImg4 from "../../images/portfolio/portfolio-3/image_4.jpg"
import PortImg5 from "../../images/portfolio/portfolio-3/image_5.jpg"
import TeamPic1 from "../../images/team/pic1.jpg"
import TeamPic2 from "../../images/team/pic2.jpg"
// import TeamPic3 from "../../images/team/pic3.jpg"

class Index2 extends Component {

	render() {
		return (
			<>

				<Header2 />

				<div className="page-content bg-white">

					<Slider />

					{/* <!-- Main Slider --> */}
					<div className="content-block" id="content-area">

						<div className="section-area section-sp2 bg-white" style={{ backgroundImage: "url(" + BackBg2 + ")", backgroundPosition: "bottom", backgroundSize: "100%" }}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
										<div className="heading-bx m-b30">
											<h6 className="title-ext m-b0">Herzlich Willkommen</h6>
											<h2 className="title-head m-b0">Über uns</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Webdesign günstig 4 you.. günstige Homepage für kleine Unternehmen, Freiberufler, Künstler, Handwerksbetriebe uvm. </p>
										</div>
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Persönliche Beratung</li>
													<li>Individuelle Gestaltung nach Wunsch</li>
													<li>Fotoservice</li>
													<li>Upload der fertigen Website auf den Webserver</li>
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Beantragung der Web-Adresse zum Beispiel: www.yourbussines.de</li>
													<li>Bearbeitung ihrer Bilder</li>
													<li>Erstellung von Logos</li>
													<li>Pflege Ihrer Website</li>
												</ul>
											</div>
										</div>
										<Link to="contact" className="btn m-r10">Kontakt Uns</Link>
										<Link to="about" className="btn-secondry">Und Mehr</Link>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
										<div className="about-img-box4 row sp10">
											<div className="col-lg-12">
												<div className="about-img1">
													<img src={AboutPic14} alt="" />
												</div>
											</div>
											<div className="col-lg-12 m-b10 m-t10">
												<div className="about-img2">
													<img src={AboutPic15} alt="" />
												</div>
											</div>
											<div className="about-img-inner">
												<div>
													<h2 className="title"><Count counter={12} />+</h2>
													<span>JAHRE ARBEIT IM WEBSITE DESIGNER</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="section-area section-sp3 bg-gray">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-center m-b0">
											<h6 className="title-ext m-b0">Erfolgsrezept</h6>
											<h2 className="title-head m-b0">Stolze Leistungen</h2>
											<div className="ttr-separator sepimg"></div>
										</div>
									</div>
								</div>
							</div>
							<ProjectSlider7 />
						</div>

						<div className="section-area section-sp2 bg-white" style={{ backgroundImage: "url(" + BackBg2 + ")", backgroundPosition: "bottom", backgroundSize: "100%" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-center">
											<h6 className="title-ext m-b0">DIENSTLEISTUNGEN</h6>
											<h2 className="title-head m-b0">Unsere Dienstleistungen</h2>
											<div className="ttr-separator sepimg"></div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic1} alt="" />
											</div>
											<div className="service-info">
												<h4 className="title">Persönliche Beratung</h4>
												<p>Webseite und Kreativ </p>
												<Link to="about" className="btn-link">Weiterlesen</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic2} alt="" />
											</div>
											<div className="service-info">
												<h4 className="title">Kreative Werke</h4>
												<p>Auf deinen Wunsch</p>
												<Link to="about" className="btn-link">Weiterlesen</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic3} alt="" />
											</div>
											<div className="service-info">
												<h4 className="title">Fotoservice</h4>
												<p>Für schöne erinnerungen</p>
												<Link to="about" className="btn-link">Weiterlesen</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic4} alt="" />
											</div>
											<div className="service-info">
												<h4 className="title">Beantragung</h4>
												<p>Web-Adresse </p>
												<Link to="about" className="btn-link">Weiterlesen</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic5} alt="" />
											</div>
											<div className="service-info">
												<h4 className="title">Einrichtung </h4>
												<p>E-Mail kontos</p>
												<Link to="about" className="btn-link">Weiterlesen</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic6} alt="" />
											</div>
											<div className="service-info">
												<h4 className="title">Pflege Ihrer Website</h4>
												<p>Für Stabilität</p>
												<Link to="about" className="btn-link">Weiterlesen</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="section-area section-sp1 bg-primary" style={{ backgroundImage: "url(" + BackBg1 + ")", backgroundPosition: "bottom", backgroundSize: "100%" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-white text-center">
											<h6 className="title-ext m-b0">Portfolio unserer</h6>
											<h2 className="title-head m-b0">Unsere Arbeiten</h2>
											<div className="ttr-separator sepimg2"></div>
										</div>
									</div>
								</div>
								<Tabs className="history-box">
									<TabList className="nav nav-tabs">
										<Tab>Webdesign</Tab>
										<Tab>Website One-Stop-Service</Tab>
										<Tab>Kreative Werke</Tab>
										<Tab>Fotoservice</Tab>
									</TabList>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg1} alt="" />
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Webdesign </h3>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg2} alt="" />
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Website One-Stop-Service</h3>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg3} alt="" />
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Kreative Werke</h3>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg4} alt="" />
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Fotoservice</h3>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero obcaecati adipisci nulla minima officiis optio, error non esse numquam itaque, cumque ut minus! Facilis quas consequatur inventore? Ducimus, illo.</p>												</div>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>

						<div className="section-area section-sp1 team-page bg-white" style={{ backgroundImage: "url(" + BackBg2 + ")", backgroundPosition: "bottom", backgroundSize: "100%" }}>
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Unser Teammitglied</h6>
									<h2 className="title-head m-b0">Entwickler</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="offset-xl-3 col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic1} alt="" />
												<ul className="team-social">
													<li><a href="https://jinda.netlify.app" target="_blank"><i className="mt-3 ti-world"></i></a></li>
													<li><a href="https://www.facebook.com/vachi.neudecker" target="_blank"><i className="fa fa-facebook"></i></a></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Vachi Neudecker</Link></h4>
												<span>CEO And Beraterin</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic2} alt="" />
												<ul className="team-social">
													<li><a href="https://pumin-wongsiri.netlify.app" target="_blank"><i className="mt-3 ti-world"></i></a></li>
													<li><a href="https://fb.com/pumin.wongsiri" target="_blank"><i className="fa fa-facebook"></i></a></li>
													<li><a href="https://th.linkedin.com/in/pumin-wongsiri-a2027a1a6"><i className="fa fa-linkedin"></i></a></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Pumin Wongsiri</Link></h4>
												<span>Softwareentwickler</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="section-area overflow-hidden section-sp2 ovbl-dark" style={{ backgroundImage: "url(" + BackBg4 + ")", backgroundPosition: "center" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-7">
										<Testimonial3 />
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>

				<Footer1 />

			</>
		);
	}
}

export default Index2;
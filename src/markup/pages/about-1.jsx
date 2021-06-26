import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import AboutHead from '../elements/about/about-head';
import Testimonial2 from '../elements/testimonial/testimonial2';
import MissionVision from '../elements/mission-vision/mission-vision';
import Services2 from '../elements/services/services-2';
import Counter from '../elements/counter/counter';

// Images
import Banner1 from "../../images/banner/banner1.jpg"
import BackBg1 from "../../images/background/bg1.jpg"

class About1 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url(" + Banner1 + ")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Über Uns</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Zuhause</Link></li>
										<li>Über Uns</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<AboutHead />
							</div>
						</div>
						
						<Services2 />
						
						<div className="section-area bg-gray">
							<div className="container">
								<MissionVision />
							</div>
						</div>
						
						<Counter />
						
						<div className="section-area section-sp2 ovbl-dark bg-gray parallax" style={{backgroundImage: "url("+BackBg1+")", backgroundPosition: "top"}}>
							<div className="container">
								<div className="heading-bx text-white text-center">
									<h6 className="title-ext m-b0 "><span className="text-primary">KUNDEN SAGT</span></h6>
									<h2 className="title-head m-b0">Was Kunden über uns sprechen</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<Testimonial2 />
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default About1;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image1 from "../../../images/about/pic11.jpg"
import Image2 from "../../../images/portfolio/portfolio-1/image_7.jpg"

class About1 extends Component {
	render() {
		return (
			<>
				<div className="row">
					<div className="col-md-6">
						<div className="about-img-box3">
							<div className="img1">
								<img src={Image1} alt="" />
							</div>
							<div className="img2">
								<img src={Image2} alt="" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="heading-bx m-b20">
							<h6 className="title-ext m-b0">POPULAR SERVICES</h6>
							<h2 className="title-head m-b0">Excellent Service Provide For Business</h2>
							<div className="ttr-separator sepimg"></div>
							<h5 className="title-text fw4 m-t5 m-b0">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</h5>
							<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.Our purpose follow leading design, engineering and industrial.</p>
						</div>
						<Link to="about" className="btn">About Us</Link>
					</div>
				</div>
			</>
		);
	}
}

export default About1;

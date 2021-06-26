import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import ServicesPic1 from "../../../images/services/service/pic1.jpg"
import ServicesPic2 from "../../../images/services/service/pic2.jpg"
import ServicesPic3 from "../../../images/services/service/pic3.jpg"
import ServicesPic4 from "../../../images/services/service/pic4.jpg"
import ServicesPic5 from "../../../images/services/service/pic5.jpg"
import ServicesPic6 from "../../../images/services/service/pic6.jpg"

class ServiceSlider1 extends Component{
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
				
		return(
			<>
			
				<Slider {...settings} className="slider-sp0 service-gallery-top arrow-none">
					<div className="slider-item">
						<div className="service-info" style={{backgroundImage:"url("+ServicesPic1+")"}}>
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Material Science</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-tractor bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" style={{backgroundImage:"url("+ServicesPic2+")"}}>
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Chemical Research</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-flask bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" style={{backgroundImage:"url("+ServicesPic3+")"}}>
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Material Science</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-trolley bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" style={{backgroundImage:"url("+ServicesPic4+")"}}>
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Mechanical Engineering</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-mask bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" style={{backgroundImage:"url("+ServicesPic5+")"}}>
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Oil and Gas</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-fuel bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" style={{backgroundImage:"url("+ServicesPic6+")"}}>
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Power And Energy</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-derrick bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			
			</>
		);
	}
}

export default ServiceSlider1;

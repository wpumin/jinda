import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import Image1 from "../../../images/slider/slide-custom1.jpg"
import Image2 from "../../../images/slider/slide-custom2.jpg"

class Slider2 extends Component {

	render() {

		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		return (
			<>

				<Slider {...settings} className="tt-slider slider-sp0 slider-two">
					<div className="slider-item">
						<div className="slider-thumb ovbl-middle">
							<img src={Image1} alt="" />
						</div>
						<div className="slider-content text-center text-white">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title">Herzlich Willkommen</h6>
									<h2 className="title">WEBDESIGN <br /> GÜNSTIG 4 YOU</h2>
									<Link className="btn primary" to="contact">Kontakt Uns</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="slider-thumb ovbl-middle">
							<img src={Image2} alt="" />
						</div>
						<div className="slider-content text-center text-white">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title">Herzlich Willkommen</h6>
									<h2 className="title">WEBDESIGN <br /> GÜNSTIG 4 YOU</h2>
									<Link className="btn primary" to="contact">Kontakt Uns</Link>
								</div>
							</div>
						</div>
					</div>
				</Slider>

			</>
		);
	}
}

export default Slider2;
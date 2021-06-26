import React, { Component } from 'react';
import CountUp from 'react-countup';

// Elements
import Count from '../../elements/counter/counter-sensor';

class Counter extends Component{
	render(){
		return(
			<>
				<div className="section-area bg-white section-sp1">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext m-b0">KUNDEN / PARTNER / PROJEKTE</h6>
							<h2 className="title-head m-b0">UNTERNEHMENSSTATUS</h2>
							<div className="ttr-separator sepimg"></div>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.2s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={25}/>
									</div>
									<span className="counter-text">Kunden</span>
									<i className="la la-user bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.8s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={22}/>
									</div>
									<span className="counter-text">Zufriedene Kunden</span>
									<i className="la la-smile bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.4s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={6}/>
									</div>
									<span className="counter-text">Partner</span>
									<i className="la la-globe bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.6s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={30}/>
									</div>
									<span className="counter-text">Projekte</span>
									<i className="la la-briefcase bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Counter;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import PricingTable from '../elements/pricingtable/pricingtable';
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';

class Pricing extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Preispaket</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Zuhause</Link></li>
										<li>Preispaket</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-gray section-sp1">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Preisgestaltung</h6>
									<h2 className="title-head m-b0">Website One-Stop-Service</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<PricingTable />
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-white">
							<div className="container wow fadeIn" data-wow-delay="0.8s">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Unser Partner</h6>
									<h2 className="title-head m-b0">Partner & Kunden</h2>
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

export default Pricing;
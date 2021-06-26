import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import TeamPic1 from '../../images/team/pic1.jpg';
import TeamPic2 from '../../images/team/pic2.jpg';
import TeamPic3 from '../../images/team/pic3.jpg';
import TeamPic4 from '../../images/team/pic4.jpg';
import TeamPic5 from '../../images/team/pic5.jpg';
import TeamPic6 from '../../images/team/pic6.jpg';

class Team extends Component {

	render() {
		return (
			<>
				<Header1 />

				{/* <!-- Content --> */}
				<div className="page-content bg-white">

					<div className="page-banner ovbl-dark parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Unser Team</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Zuhause</Link></li>
										<li>Unser Team</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="content-block" id="content-area">

						<div className="section-area section-sp1 team-page bg-white">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Unser Teammitglied</h6>
									<h2 className="title-head m-b0">Treffen Sie unsere<br />Ehrfürchtigen Teammitglied</h2>
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

					</div>

				</div>

				<Footer1 />

			</>
		);
	}
}

export default Team;
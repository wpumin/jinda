import React, { Component, useState, handleShow } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import Logo from "../../../images/logo.png"
import ProductImg1 from "../../../images/product/pic1.jpg"
import ProductImg2 from "../../../images/product/pic2.jpg"

class Header1 extends Component {

	componentDidMount() {

		var pathname = window.location.pathname;

		// Mobile Menu sidebar function
		var btn = document.querySelector('.menuicon');
		var nav = document.querySelector('.menu-links');

		function toggleFunc() {
			btn.classList.toggle("open");
			nav.classList.toggle("show");
		}

		btn.addEventListener('click', toggleFunc);

		// Mobile Submenu open close function
		var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
		for (var y = 0; y < navMenu.length; y++) {
			navMenu[y].addEventListener('click', function () { menuClick(this) });
		}

		function menuClick(current) {
			const active = current.classList.contains("open")
			navMenu.forEach(el => el.classList.remove('open'));

			if (active) {
				current.classList.remove('open')
				console.log("active")
			} else {
				current.classList.add('open');
				console.log("close")
			}
		}

	}

	render() {

		const pathname = window.location.pathname

		return (
			<>

				{/* <!-- Header Top ==== --> */}
				<header className="header rs-nav">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="topbar-left">
									<ul>
										<li><Link to="#"><i className="la la-phone"></i>Tel 07343/9223493</Link></li>
										<li><Link to="#"><i className="la la-clock"></i>Mon to Fre - 9:00am - 6:00pm</Link></li>
										<li><Link to="#"><i className="las la-envelope-open"></i>Info@jinda.eu</Link></li>
									</ul>
								</div>
								<div className="topbar-right">
									<ul>
										<li><Link to="team">Unser Team</Link></li>
										{/* <li><Link to="company-history">Meine Zeitleisten</Link></li> */}
										<li><Link to="impressum">Impressum</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={Logo} alt="" /></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li className="d-none d-sm-block">
												<Link to="contact" className="btn">Kontakt Uns</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={Logo} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li className={`${pathname == "/" && "active"} home`}><Link to="/">Zuhause</Link></li>
										<li className={`${pathname == "/about" && "active"} classic-menu`}><Link to="about"><span>Über Uns</span></Link></li>
										{/* <li className="classic-menu"><Link to="projects-masonry-grid-4"><span>Dienstleistungen</span></Link></li> */}
										<li className={`${pathname == "/pricing" && "active"} classic-menu`}><Link to="pricing"><span>Preise</span></Link></li>
										<li className={`${pathname == "/contact" && "active"} classic-menu d-block d-md-none`}><Link to="contact">Kontact Uns</Link></li>
										{/* <li className="classic-menu"><Link to="contact"><span>Kontakt Uns</span></Link></li> */}
									</ul>
									<div className="nav-social-link">
										<Link to="#"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-google-plus"></i></Link>
										<Link to="#"><i className="fa fa-linkedin"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="Type to search" />
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
				{/* <!-- Header Top END ==== --> */}
			</>
		);
	}
}

export default Header1;

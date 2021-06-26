import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Loyout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';

import emailjs from "emailjs-com";

const Contact2 = () => {
	const [sendEmailStatus, setSendEmailStatus] = useState("");
	const [disableSubmit, setDisableSubmit] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [borderDanger, setBorderDanger] = useState();
	const regEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	useEffect(() => {
		checkStatusDisableSubmit();
	}, [name, email, phone, subject, message]);

	function checkStatusDisableSubmit() {
		if (
			name != "" &&
			email != "" &&
			phone != "" &&
			validateEmail(email) == true &&
			subject != "" &&
			message != ""
		) {
			setDisableSubmit(false);
			setBorderDanger(false);
		} else {
			if (validateEmail(email) == false && email != "") {
				setBorderDanger(true);
				setDisableSubmit(true);
			}
			setDisableSubmit(true);
		}
	}

	function validateEmail(email) {
		const regExEmail =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regExEmail.test(email);
	}

	function sendEmail(e) {
		setDisableSubmit(true);
		{ console.log(e.target) }
		setSendEmailStatus("Sending...");

		e.preventDefault();

		emailjs
			.sendForm(
				"service_wp1ml4m",
				"template_22dn3ch",
				e.target,
				"user_5ZS6w46V5KcqkBMjMBCl4"
			)
			.then(
				(result) => {
					setSendEmailStatus("Message Sent!");
					setTimeout(() => {
						setName("");
						setEmail("");
						setPhone("");
						setSubject("");
						setMessage("");
						setSendEmailStatus("");
					}, 2000);
				},
				(error) => {
					setSendEmailStatus("Error Sending!");
					//   console.log(error.text);
				}
			);
	}

	return (
		<>
			<Header1 />

			{/* <!-- Content --> */}
			<div className="page-content bg-white">

				<div className="page-banner ovbl-dark parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
					<div className="container">
						<div className="page-banner-entry">
							<h1 className="text-white">Kontakt</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to="/"><i className="fa fa-home"></i> Zuhause</Link></li>
									<li>Kontakt</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="content-block" id="content-area">

					<div className="section-area bg-gray">
						<div className="container">
							<div className="row contact-bx-area2">
								<div className="col-lg-8 col-md-12 wow fadeIn section-sp2" data-wow-delay="0.4s">
									<form className="form-area-box ajax-form p-lr30 p-sm-lr5" onSubmit={sendEmail}>
										<div className="ajax-message"></div>
										<div className="heading-bx">
											<h6 className="title-ext m-b0">Hinterlasse deine Nachricht</h6>
											<h2 className="title-head m-b0">KONTAK UNS</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Nehmen Sie gerne Kontakt mit mir auf. Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Visionen zu werden.</p>
										</div>
										<div className="row placeani">
											<div className="col-lg-6 ">
												<div className="form-group">
													<div className="input-group">
														{/* <label>Name</label> */}
														<input name="name" type="text" required className="form-control valid-character" placeholder="Name"
															defaultValue={name}
															value={name}
															onChange={(e) => {
																setName(e.target.value);
															}}
														/>

													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														{/* <label>Email Addresse</label> */}
														<input name="email" type="email" className={`form-control ${borderDanger && "error"}`} required placeholder="Email Addresse"
															defaultValue={email}
															value={email}
															onChange={(e) => {
																setEmail(e.target.value);
															}} />

													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														{/* <label>Telefon</label> */}
														<input name="phone" type="text" required className="form-control int-value" placeholder="Telefon"
															defaultValue={phone}
															value={phone}
															onChange={(e) => {
																setPhone(e.target.value);
															}} />

													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														{/* <label>Gegenstand</label> */}
														<input name="subject" type="text" required className="form-control" placeholder="Gegenstand"
															defaultValue={subject}
															value={subject}
															onChange={(e) => {
																setSubject(e.target.value);
															}} />

													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														{/* <label>Nachricht eingeben</label> */}
														<textarea name="message" rows="4" className="form-control" required placeholder="Nachricht eingeben"
															defaultValue={message}
															value={message}
															onChange={(e) => {
																setMessage(e.target.value);
															}} />

													</div>
												</div>
											</div>
											<div className="col-12 col-md-3">
												<button disabled={disableSubmit} name="submit" type="submit" className={`btn button-md w-100`}>Einreichen</button>
											</div>
											{sendEmailStatus && (
												<div className="col-12 mt-4">
													<p>{sendEmailStatus}</p>
												</div>
											)}

										</div>
									</form>
								</div>
								<div className="col-lg-4 col-md-12 wow fadeIn right-info bg-primary p-sm-lr15" data-wow-delay="0.4s">
									<div className="contact-icon-box">
										<h5 className="title"><i className="icon la la-map-marker-alt"></i>Adresse</h5>
										<p>Kettershauser Str. 20 89299 Unterroth</p>
										<i className="la la-map-marker-alt bg-icon"></i>
									</div>
									<div className="contact-icon-box">
										<h5 className="title"><i className="icon la la-phone-volume"></i>Kontakt Nummer</h5>
										<p>07343/9223493</p>
										<p>0151/55659129</p>
										<i className="la la-phone-volume bg-icon"></i>
									</div>
									<div className="contact-icon-box">
										<h5 className="title"><i className="icon la la-envelope-open"></i>Email Adresse</h5>
										<Link to="">Info@jinda.eu</Link>
										<i className="la la-envelope-open bg-icon"></i>
									</div>
									<div className="contact-icon-box">
										<h5 className="title"><i className="icon la la-business-time"></i>Arbeitszeit</h5>
										<p>Mon to Fre - 9:00am – 6:00pm</p>
										<i className="la la-business-time bg-icon"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="section-area section-sp2 bg-gray">
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

export default Contact2;
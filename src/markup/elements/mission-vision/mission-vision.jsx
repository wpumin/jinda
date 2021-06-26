import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Card, Header, Button} from 'react-bootstrap';

// Images
import AboutPic7 from "../../../images/about/pic7.jpg"

class MissionVision extends Component{
	render(){
		return(
			<>
				<div className="row">
					<div className="col-md-6 section-sp1 p-r30 p-xs-r15">
						<div className="heading-bx">
							<h6 className="title-ext m-b0">Dienstleistungen</h6>
							<h2 className="title-head m-b0">Unsere Dienstleistungen</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Webdesign günstig 4 you.. <br/> günstige Homepage für kleine Unternehmen, Freiberufler, Künstler, Handwerksbetriebe uvm.</p>
						</div>
						<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									<Link to="#">Persönliche Beratung</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Kreative Werke</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Fotoservice</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">Beantragung Web-Adresse</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Einrichtung E-Mail kontos</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<Link to="#">Pflege Ihrer Website</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">Mehr</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate amet asperiores architecto pariatur nesciunt cumque nulla labore qui perferendis blanditiis, vel ullam ipsam accusantium eum, vero nisi. Illo, vero!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
						{/* <Link to="faq-1" className="btn m-t20 m-sm-b10">Read More</Link> */}
					</div>
					<div className="col-md-6 p-lr0 ">
						<img src={AboutPic7} className="mvimg" alt=""/>
					</div>
				</div>
			</>
		);
	}
}

export default MissionVision;

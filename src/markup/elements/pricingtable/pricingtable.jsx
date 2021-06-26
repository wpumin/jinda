import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PricingTable extends Component{
	render(){
		return(
			<>
				<div className="pricingtable-row">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-4 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>STANDARD</h2>
											<p>Homepagepflege / Aktualisierung</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">€</span>
											<span className="pricingtable-bx">49</span>
											<span className="pricingtable-type">BEGIN</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-question"></i> Ist Website nicht mehr aktuell</li>
										<li><i className="fa fa-question"></i> Informationen sind aktualisiert</li>
										<li><i className="fa fa-question"></i> Ein bisschen Abwechslung</li>
										<li><i className="fa fa-times"></i> Struktur ändern</li>
										<li><i className="fa fa-times"></i> Source Code</li>
										<li><i className="fa fa-times"></i> Hosting und einfache Domain</li>
										<li><i className="fa fa-check"></i> 7 Tage Support</li>
										<li><i className="fa fa-check"></i> Golive auf dem Server</li>
										<li><i className="fa fa-check"></i> 2-4 Werktage liefern</li>
									</ul>
									<div className="pricingtable-footer"> 
									<a href="tel:015155659129" className="btn">KAUFEN</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner pricingtable-highlight">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>GOLD</h2>
											<p>Einfache Startseite</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">€</span>
											<span className="pricingtable-bx">99</span>
											<span className="pricingtable-type">BEGIN</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-check"></i> Erstellung der Homepage</li>
										<li><i className="fa fa-check"></i> Individuell für Sie erstelltes</li>
										<li><i className="fa fa-check"></i> Beratung zum Geschäft</li>
										<li><i className="fa fa-check"></i> Fotobearbeitung</li>
										<li><i className="fa fa-check"></i> Vorlage für ein Unternehmen</li>
										<li><i className="fa fa-check"></i> Hosting und einfache Domain</li>
										<li><i className="fa fa-check"></i> 1 Monat zusätzlicher Support</li>
										<li><i className="fa fa-check"></i> Golive auf dem Server</li>
										<li><i className="fa fa-check"></i> 1 Woche liefern</li>
									</ul>
									<div className="pricingtable-footer"> 
									<a href="tel:015155659129" className="btn">KAUFEN</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>PRÄMIE</h2>
											<p>Kreativ Auf Ihren Wunsch</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">€</span>
											<span className="pricingtable-bx">199</span>
											<span className="pricingtable-type">BEGIN</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-check"></i> Registrierung Ihrer Domain</li>
										<li><i className="fa fa-check"></i> Webhosting</li>
										<li><i className="fa fa-check"></i> Email Einrichtung</li>
										<li><i className="fa fa-check"></i> Anmeldung bei Google</li>
										<li><i className="fa fa-check"></i> Vorlage für ein Unternehmen</li>
										<li><i className="fa fa-check"></i> Source Code</li>
										<li><i className="fa fa-star"></i> 24/7 Unterstützung 1 Monat</li>
										<li><i className="fa fa-check"></i> Golive auf dem Server</li>
										<li><i className="fa fa-check"></i> Lieferung in 1-2 Wochen</li>
									</ul>
									<div className="pricingtable-footer"> 
										<a href="tel:015155659129" className="btn">KAUFEN</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-12 col-md-12 col-lg-12 mt-3">
							<h4>Hinweis</h4>
							<ul>
								<li>In den Preisen ist gemäß § 19 (1) UStG keine Umsatzsteuer enthalten.</li>
								<li>Kosten für Updates, Änderungen und Homepagepflege nach Aufwand und Größe.</li>
								<li>Die oben genannten Preise setzen voraus, dass Bilder und Text von Ihnen gestellt werden. Falls Sie eine Erstellung der Bilder wünschen, stehe ich Ihnen gerne zur Verfügung.</li>
							</ul>
						</div>


						
					</div>
				</div>
			</>
		);
	}
}

export default PricingTable;

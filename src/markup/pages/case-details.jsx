import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, { SRLWrapper, useLightbox } from 'simple-react-lightbox';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';


// Images
import Banner1 from '../../images/banner/banner1.jpg';
import PortImage8 from '../../images/portfolio/image_8.jpg';
import PortImage9 from '../../images/portfolio/image_9.jpg';
import PortImage10 from '../../images/portfolio/image_10.jpg';
import PortImage11 from '../../images/portfolio/image_11.jpg';
import PortImage12 from '../../images/portfolio/image_12.jpg';

const content = [
	{
		thumb: PortImage8,
		LightImg: PortImage8,
		tag: ['Metallurgy',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{
		thumb: PortImage9,
		LightImg: PortImage9,
		tag: ['Metallurgy',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{
		thumb: PortImage10,
		LightImg: PortImage10,
		tag: ['Chemical',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{
		thumb: PortImage11,
		LightImg: PortImage11,
		tag: ['Metallurgy',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{
		thumb: PortImage12,
		LightImg: PortImage12,
		tag: ['Industrial',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
]

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#fe5a0e",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#fe5a0e",
		iconColor: "rgba(255, 255, 255, 1)",
		showAutoplayButton: false,
		showDownloadButton: false,
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor" >
			Bild Ansehen
		</Link>
	)
}

const FilterList = ({ dataFilter, defaultTag, activeFilter }) => {
	return (
		<li className={`${activeFilter ? 'btn active' : 'btn'}`} onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}><span>{dataFilter}</span></Link>
		</li>
	);
};

function CaseDetailsFn() {

	const [filteredImages, setFilterdImages] = useState([]);
	const [tag, setTag] = useState('All Cases');

	useEffect(() => {
		tag === 'All Cases' ? setFilterdImages(content) : setFilterdImages(content.filter(image => image.tag.find(element => element === tag)))
	}, [tag])

	return (
		<>
			<Header1 />

			{/* <!-- Content --> */}
			<div className="page-content bg-white">

				<div className="page-banner ovbl-dark parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
					<div className="container">
						<div className="page-banner-entry">
							<h1 className="text-white">Impressum</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to="/"><i className="fa fa-home"></i> Zuhause</Link></li>
									<li>Impressum</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="content-block" id="content-area">

					<div className="section-area section-sp2 port-7-content">
						<div className="container">
							<div className="row">
								<div className="col-lg-7">
									<div className="heading-bx text-left m-b20">
										<h4 className="title m-b5">Angaben gemäß § 5 TMG</h4>
										{/* <div className="ttr-separator sepimg"></div> */}
									</div>
									<p>Vachiraporn Neudecker <br />B.B.A. (Bechelor of Business Administration)</p>
									<h4 className="title m-b5 mt-4">Über webdesign günstig 4 you</h4>
									<ul className="protfolio-info m-b0 m-md-b30 mt-4 mb-4">
										<li><strong>Adresse :</strong> <span>Kettershauser Str. 20 89299 Unterroth</span></li>
										<li><strong>Telefon :</strong> <span>07343/9223493</span></li>
										<li><strong>Mobil :</strong><span>0151/55659129</span></li>
										<li><strong>Email :</strong><span>Info@jinda.eu</span></li>
										<li><strong>Steuernummer :</strong><span>151 / 254 / 60485</span></li>
										<li><strong>Umsatzsteuerbefreit gemäß  :</strong><span>§ 19 Abs. 1 Umsatzsteuergesetz -UStG-</span></li>
										<li><strong>Quellenangaben für die verwendeten Bilder und Grafiken  :</strong><span>www.freepik.com / www.fotolia.com</span></li>
										<li><strong>Quelle  :</strong><span>Erstellt mit dem Impressum-Generator Freiberufler von eRecht24.</span></li>
									</ul>
									<h4 className="title m-b5 mt-4">Haftungsausschluss</h4>
									<div className="row">
										<div className="col-lg-6">
											<ul className="list-check mb-0 mb-md-4">
												<li>Haftung für Inhalte</li>
												<li>Haftung für Links</li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul className="list-check">
												<li>Urheberrecht</li>
											</ul>
										</div>
									</div>

									<h4 className="title m-b5 mt-2">Haftung für Inhalte</h4>
									<p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

									<h4 className="title m-b5 mt-2">Haftung für Links</h4>
									<p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

									<h4 className="title m-b5 mt-2">Urheberrecht</h4>
									<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

								</div>


								<div className="col-lg-5">
									<div className="row sp4 magnific-image sticky-top">
										<SimpleReactLightbox>
											<SRLWrapper options={options} >
												<div class="row sp4 magnific-image prl-1">
													<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.2s">
														<div className="portfolio-box style-2">
															<div className="portfolio-media">
																<img src={PortImage12} alt="" />
															</div>
															<MagnificAnchor />
														</div>
													</div>
													<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp industrial" data-wow-delay="0.4s">
														<div className="portfolio-box style-2">
															<div className="portfolio-media">
																<img src={PortImage11} alt="" />
															</div>
															<MagnificAnchor />
														</div>
													</div>
												</div>
												<div className="action-card col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.6s">
													<div className="portfolio-box style-2">
														<div className="portfolio-media">
															<img src={PortImage10} alt="" />
														</div>
														<MagnificAnchor />
													</div>
												</div>
												<div class="row sp4 magnific-image prl-1">
													<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.8s">
														<div className="portfolio-box style-2">
															<div className="portfolio-media">
																<img src={PortImage9} alt="" />
															</div>
															<MagnificAnchor />
														</div>
													</div>
													<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.2s">
														<div className="portfolio-box style-2">
															<div className="portfolio-media">
																<img src={PortImage8} alt="" />
															</div>
															<MagnificAnchor />
														</div>
													</div>
												</div>
											</SRLWrapper>
										</SimpleReactLightbox>
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

class CaseDetails extends Component {
	render() {
		return (
			<>
				<CaseDetailsFn />
			</>
		)
	}
}

export default CaseDetails;
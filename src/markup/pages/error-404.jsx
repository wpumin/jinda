import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {

	render() {
		return (
			<>
				<div className="account-form error-404">
					<div className="account-form-inner">
						<div className="account-container">
							<div className="error-page">
								<h2 className="error-title">
									<span>4</span>
									<span>0</span>
									<span>4</span>
								</h2>
								<h3>Page Not Found</h3>
								<h5>Anteil Die von Ihnen gesuchte Seite wurde möglicherweise entfernt, wurde umbenannt oder ist vorübergehend nicht verfügbar.</h5>
								<div className="row">
									<div className="col-12 col-md-6 text-md-right">
										<Link to="/" className="btn button-md m-b15 m-r5 on-top w-50">Zurück</Link>
									</div>
									<div className="col-12 col-md-6 text-md-left">
										<Link to="/" className="btn button-md black m-b15 on-top w-50">Zur Startseite</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</>
		);
	}
}

export default Error;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';

import Index2 from './pages/index-2';
import About1 from './pages/about-1';
import Awards from './pages/awards';
import CaseDetails from './pages/case-details';
import Client from './pages/client';
import CompanyHistory from './pages/company-history';
import Contact2 from './pages/contact-2';
import Error404 from './pages/error-404';
import Faq1 from './pages/faq-1';
import Faq2 from './pages/faq-2';
import Pricing from './pages/pricing';
import Team from './pages/team';

class Markup extends Component {
	render() {
		return (
			<>
				<BrowserRouter basename={'/'}>
					<Switch>
						<Route path='/' exact component={Index2} />
						<Route path='/about' component={About1} />
						<Route path='/awards' component={Awards} />
						<Route path='/impressum' component={CaseDetails} />
						<Route path='/client' component={Client} />
						<Route path='/company-history' component={CompanyHistory} />
						<Route path='/contact' component={Contact2} />
						<Route path='/error-404' component={Error404} />
						<Route path='/faq-1' component={Faq1} />
						<Route path='/faq-2' component={Faq2} />
						<Route path='/pricing' component={Pricing} />
						<Route path='/team' component={Team} />
						<Route component={Error404} />
					</Switch>
				</BrowserRouter>
				<BackToTop />
			</>
		);
	}
}

export default Markup;

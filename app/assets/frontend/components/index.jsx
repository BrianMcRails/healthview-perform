import React from 'react';
import { Link } from 'react-router'; //since we used link, we need to import link property from router library
import RiskBox from './riskbox';

import RisksList from './riskslist';
import RiskActions from '../actions/riskactions';
import RiskStore from '../stores/riskstore';

import PatientStore from '../stores/patientstore';
import PatientActions from '../actions/patientactions';
import PatientsList from './patientslist';

//import CheckStore from '../stores/checkstore';
import CheckActions from '../actions/checkactions';
import ChecksList from './checkslist';





let getAppState = () => {
	return {risksList: RiskStore.getAll(), patientsList: PatientStore.getAll()};
}

export default class Index extends React.Component {
	constructor(props){
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);



	}
	componentDidMount() {
		RiskActions.getAllRisks();
		RiskStore.addChangeListener(this._onChange);
		PatientActions.getAllPatients();
		PatientStore.addChangeListener(this._onChange);
		//CheckActions.getAllChecks();
		//CheckStore.addChangeListener(this._onChange);
		this.intervalRefresh();

		// $.ajax("/tweets")
		// .success(data => this.setState(this.formattedTweets(data)))
		// .error(error => console.log(error));
	}
	componentWillUnmount() {
		RiskStore.removeChangeListener(this._onChange);
		PatientStore.removeChangeListener(this._onChange);
		//CheckStore.removeChangeListener(this._onChange);

	}
	_onChange() {
		this.setState(getAppState());
	}
	intervalRefresh(){
		RiskActions.refreshRisks();
		CheckActions.refreshChecks();
		setInterval(this.intervalRefresh, 10000);
	}
	render() {
		return (
			<div className="container">
			<PatientsList patients={this.state.patientsList}/>
			<ChecksList />
			<RisksList risks={this.state.risksList}/>
			</div>
		);
	}
}

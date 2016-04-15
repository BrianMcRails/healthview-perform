import React from 'react';
import { Link } from 'react-router'; //since we used link, we need to import link property from router library
import RiskBox from './riskbox';
import RisksList from './riskslist';
import RiskActions from '../actions/riskactions';
import RiskStore from '../stores/riskstore';



let getAppState = () => {
	return {risksList: RiskStore.getAll() };
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
		this.intervalRefresh();

		// $.ajax("/tweets")
		// .success(data => this.setState(this.formattedTweets(data)))
		// .error(error => console.log(error));
	}
	componentWillUnmount() {
		RiskStore.removeChangeListener(this._onChange);

	}
	_onChange() {
		this.setState(getAppState());
	}
	intervalRefresh(){
		RiskActions.refreshRisks();
		setInterval(this.intervalRefresh, 10000);
	}
	render() {
		return (
			<div className="container">
			<RiskBox />
			<RisksList risks={this.state.risksList}/>
			</div>
		);
	}
}

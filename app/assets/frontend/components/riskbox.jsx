import React from 'react';
import RiskActions from "../actions/riskactions";

export default class RiskBox extends React.Component {

	sendRisk(event){
		event.preventDefault();
		//this.props.sendTweet(this.refs.tweetTextArea.value); //this was a previous call to parent component function
		RiskActions.sendRisk(this.refs.riskTitleSelect.value, this.refs.riskScoreTextArea.value);
		this.refs.riskTitleSelect.value = '';
		this.refs.riskScoreTextArea.value = '';
	}
	render() {
		return (
			<form onSubmit={this.sendRisk.bind(this)}>
				<div className="input-field col s12">
				<input type="text" ref="riskTitleSelect" className="materialize-text" />
				<label>Risk Name</label>
				</div>
				<div className="input-field col s12">
				<input type="text" ref="riskScoreTextArea" className="materialize-text" />
				<label>Risk Score</label>
				<button type="submit" className="btn right">Submit</button>
				</div>
			</form>
		);
	}	
}
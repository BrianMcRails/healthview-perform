import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./appeventemitter";
import RiskActions from "../actions/riskactions";




let _risks = [];


class RiskEventEmitter extends AppEventEmitter {

	getAll(){
	 	return _risks.map(risk => {
	 		risk.formattedDate = moment(risk.updated_at).fromNow();
	 		return risk;
	 	});
	}
}

let RiskStore = new RiskEventEmitter();

AppDispatcher.register( action => {

	//action.actionType === RECEIVED_TWEETS
	switch(action.actionType){
		case ActionTypes.RECEIVED_RISKS:
		_risks = action.rawRisks;
		RiskStore.emitChange();
		//
		break;
		case ActionTypes.RECEIVED_ONE_RISK:
		_risks.unshift(action.rawRisk);
		RiskStore.emitChange();
		default:
	}
});

export default RiskStore;
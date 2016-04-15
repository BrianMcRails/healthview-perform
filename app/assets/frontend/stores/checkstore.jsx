import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./appeventemitter";
import CheckActions from "../actions/checkactions";




let _checks = [];


class CheckEventEmitter extends AppEventEmitter {

	getAll(){
	 	return _checks.map(check => {
	 		check.formattedDate = moment(check.updated_at).fromNow();
	 		return check;
	 	});
	}
}

let CheckStore = new CheckEventEmitter();

AppDispatcher.register( action => {

	//action.actionType === RECEIVED_TWEETS
	switch(action.actionType){
		case ActionTypes.RECEIVED_CHECKS:
		_checks = action.rawChecks;
		CheckStore.emitChange();
		//
		break;
		case ActionTypes.RECEIVED_ONE_CHECK:
		_checks.unshift(action.rawCheck);
		CheckStore.emitChange();
		case ActionTypes.UPDATED_ONE_CHECK:
		_checks.unshift(action.rawCheck);
		CheckStore.emitChange();
		default:
	}
});

export default CheckStore;
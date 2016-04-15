import React from 'react';
import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
	receivedRisks(rawRisks){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_RISKS,
			rawRisks
		})
	},
	receivedOneRisk(rawRisk){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_RISK,
			rawRisk //same as rawTweet: rawTweet
		})
	},
	receivedChecks(rawChecks){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_CHECKS,
			rawChecks
		})
	},
	receivedOneCheck(rawCheck){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_CHECK,
			rawCheck //same as rawTweet: rawTweet
		})
	},
	updatedOneCheck(rawCheck){
		AppDispatcher.dispatch({
			actionType: ActionTypes.UPDATED_ONE_CHECK,
			rawCheck //same as rawTweet: rawTweet
		})
	},
	receivedPatients(rawPatients){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_PATIENTS,
			rawPatients
		})
	}
}
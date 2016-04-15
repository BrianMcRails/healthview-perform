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
	receivedUsers(rawUsers){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_USERS,
			rawUsers: rawUsers
		})
	}
}
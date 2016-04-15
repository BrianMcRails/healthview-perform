import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./appeventemitter";
import PatientActions from "../actions/patientactions";


let _patients = [];


class PatientEventEmitter extends AppEventEmitter {

	getAll(){
	 	return _patients.map( patient => {
	 		patient.type = 'Active';
	 		return patient;
	 	});
	 	}
	}


let PatientStore = new PatientEventEmitter();

AppDispatcher.register( action => {

	//action.actionType === RECEIVED_TWEETS
	switch(action.actionType){
		case ActionTypes.RECEIVED_PATIENTS:
			_patients = action.rawPatients;
			PatientStore.emitChange();
			break;
		default:
	}
});

export default PatientStore;
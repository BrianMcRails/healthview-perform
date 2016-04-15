import React from 'react';
import ServerActions from "./actions/serveractions";

export default {
	getAllRisks(){
		$.get('/risks')
		.success( rawRisks => ServerActions.receivedRisks(rawRisks))
		.error(error => console.log(error));
		console.log("getting risks...");

	},
	createRisk(title, score){
		$.post('/risks', { risk_score_title: title, risk_score: score })
		.success( rawRisk => ServerActions.receivedOneRisk(rawRisk))
		.error(error => console.log(error));
	},
	getAllChecks(){
		$.get('/pre_checks')
		.success( rawChecks => ServerActions.receivedChecks(rawChecks))
		.error(error => console.log(error));
		console.log("getting checks...");

	},
	createCheck(name, status){
		$.post('/pre_checks', { check_name: name, check_status: status })
		.success( rawCheck => ServerActions.receivedOneCheck(rawCheck))
		.error(error => console.log(error));
	},
	updateCheck(check_id, check_status){
		$.put('/pre_checks', { check_status: status })
		.success( rawCheck => ServerActions.updatedOneCheck(rawCheck))
		.error(error => console.log(error));
	},
	getAllPatients(){
		$.get('/patients')
		.success (rawPatients => ServerActions.receivedPatients(rawPatients))
		.error(error => console.log(error));
	}
}
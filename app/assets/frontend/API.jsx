import React from 'react';
import ServerActions from "./actions/serveractions"

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
	}	
}
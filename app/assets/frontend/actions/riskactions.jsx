import React from 'react';
import API from "../API"

export default {

	getAllRisks(){
		API.getAllRisks();
	},
	sendRisk(title, score){
		API.createRisk(title, score);
	},
	refreshRisks(){
		setInterval(this.getAllRisks(), 10000);
	}
}
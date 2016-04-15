import React from 'react';
import API from "../API"

export default {

	getAllChecks(){
		API.getAllChecks();
	},
	sendCheck(name, status){
		API.createCheck(name, status);
	},
	updateCheck(check_id, check_status){
		API.updateCheck(check_id, check_status);
		console.log("updating check status");
	},
	refreshChecks(){
		setTimeout(this.getAllChecks(), 10000);
	}
}
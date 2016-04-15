import React from 'react';
import Patient from './patient';



export default class PatientsList extends React.Component {
	render() {
		let patients = this.props.patients.map(patient => <Patient key={patient.id} {...patient} />);

		return (
		<div className="row">
			
			{patients}
			
		</div>
		);
	}
}
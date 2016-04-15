import React from 'react';
import CheckStore from '../stores/checkstore';
import CheckActions from '../actions/checkactions';

let getAppState = () => {
	return {checks: CheckStore.getAll() };
}

export default class ChecksList extends React.Component{
	constructor(props) {
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);
	}
	componentDidMount() {
		CheckActions.getAllChecks();
		CheckStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		CheckStore.removeChangeListener(this._onChange);

	}
	_onChange() {
		this.setState(getAppState());
	}
	checkClasses(check_status) {
		return (check_status ? "'checked'" : null);
	}
	updateCheck(check_id, check_status){
		check_status = (check_status ? false : true);
		CheckActions.updateCheck(check_id, check_status);
	}
	render() {
		let checks = this.state.checks.map(check => {
			return (
				<p key={check.id}>
					<input type="checkbox" ref={check.id} className="filled-in" 
					id={check.id} checked={check.check_status} onClick={this.updateCheck.bind(this, check.id, check.check_status)}/>
      				<label for={check.id}>{check.check_name}</label>
      				<time>  {check.formattedDate}</time>
      			</p>
			)
			});
		return (
			<div>
				<form action='#'>
					{checks}
				</form>
			</div>
			);
	}
}




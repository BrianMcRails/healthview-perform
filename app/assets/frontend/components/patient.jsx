import React from 'react';

export default class Patient extends React.Component {
	render() {
		return (
			<div className="col s12">
			<img className="circle" src={this.props.gravatar} />
			<p>{this.props.name}</p>
			</div>
		);
	}
}

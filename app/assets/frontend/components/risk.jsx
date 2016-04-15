import React from 'react';

export default class Risk extends React.Component{

	render() {
		return (
			<li className="collection-item">
            <p>{this.props.risk_score_title}</p>
            <p>{this.props.risk_percent}</p>
     		<time>Last updated: {this.props.formattedDate}</time>
    		</li>
		)
	}

}

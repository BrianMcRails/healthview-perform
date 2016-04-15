import React from 'react';

export default class Risk extends React.Component{

	render() {
		return (
			<li className="collection-item avatar">
      		<img className="circle" src={this.props.gravatar} />
     		<span className="title">{this.props.name}</span><br/>
     		<time>Last updated: {this.props.formattedDate}</time>
     		<p>{this.props.risk_score_title}</p>
            <p>{this.props.risk_percent}</p>
    		</li>
		)
	}

}

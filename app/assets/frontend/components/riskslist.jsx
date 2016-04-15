import React from 'react';
import Risk from './risk';

export default class RisksList extends React.Component{
	render() {
		let risks = this.props.risks.map(risk => <Risk key={risk.id} {...risk} />);
		return (
			<div>
				<ul className="collection">
					{risks}
				</ul>
			</div>
			);
	}
}
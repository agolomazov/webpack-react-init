import React, { Component } from 'react';

export class Counter extends Component {
	state = {
		count: 0,
	};

	onChangeCounter = () => {
		this.setState(prevState => ({
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			<div onClick={this.onChangeCounter}>
				<h1>Count: {this.state.count}!</h1>
			</div>
		);
	}
}

export default Counter;

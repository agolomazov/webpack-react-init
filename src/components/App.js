import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './Button/Button';
import Counter from './Counter/Counter';

const App = () => {
	return (
		<div>
			<h1>Hello, from React!</h1>
			<Button onClick={() => console.log('Click click click!')}>Some button</Button>
			<Counter />
		</div>
	);
};

export default App;

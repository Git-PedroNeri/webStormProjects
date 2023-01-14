import React, { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	function incrementador() {
		setCounter(counter + 1);
	}

	return (
		<>
			<div>{counter}</div>
			<button type="button" onClick={incrementador}>
				Adicionar
			</button>
		</>
	);
}
export default Counter;

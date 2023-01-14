import { useEffect, useState } from 'react';
import '../styles/repositories.scss';

export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	console.log(repositories);
	console.log(count);

	return (
		<section>
			<h1></h1>
			<ul></ul>
		</section>
	);
}

//use Effect dispara uma função quando alguma coisa for alterada

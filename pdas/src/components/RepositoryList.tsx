import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from './RepositoryItem';

//https://api.github.com/users/Git-PedroNeri/repos

interface Repository {
	name: string;
	description: string;
	html_url: string;
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setRepositories(data);
			});
	}, []);

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>
			<ul>
				{repositories.map((repo) => {
					return <RepositoryItem repository={repo} key={repo.name} />;
				})}
			</ul>
		</section>
	);
}

//use Effect dispara uma função quando a variavel dependente for alterada

import React from 'react';
import {
	Hero,
	Partners,
} from '../../components/component';
import Meta from '../../components/Meta';

const Home = () => {
	return (
		<main>
			<Meta title="Icy Creatures | Creatures from the Ice Age era" />
			<Hero />
			<Partners/>
		</main>
	);
};

export default Home;

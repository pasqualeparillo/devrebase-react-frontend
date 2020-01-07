import React from 'react';
import IndexCard from './indexCard';
import IntroCard from './introCard';

export default function IndexAd() {
	return (
		<div
			className="lg:w-8/9 md:w-8/9 w-11/12 flex flex-wrap mx-auto justify-between lg:flex-no-wrap flex-wrap pt-12 pb-12"
			style={{ maxWidth: '1440px' }}
		>
			<IntroCard />
			{[0, 1, 2].map(id => <IndexCard key={id} />)}
		</div>
	);
}

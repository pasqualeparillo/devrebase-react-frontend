import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Links() {
	return (
		<div className="flex items-center justify-end w-2/3">
			{links.map((data, id) => <Link text={data.text} key={id} />)}
			<div className="h-10 flex items-center">
				<input
					className="h-full border-px border-black px-4 py-1 rounded-bl-lg rounded-tl-lg text-sm"
					type="text"
					placeholder="Your email address"
				/>
				<motion.button
					className="h-full text-black px-10 py-1 rounded-br-lg rounded-tr-lg border-t-px border-b-px border-r-px border-black"
					style={{ backgroundColor: '#ffd460' }}
					whileHover={{ backgroundColor: '#f9ed69' }}
					transition={{ duration: 0.2 }}
				>
					Newsletter
				</motion.button>
			</div>
		</div>
	);
}

function Link({ text }) {
	const [active, setActive] = useState(false);
	return (
		<motion.p
			className="lg:text-base text-xs mx-6 relative cursor-pointer "
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
		>
			<motion.span
				className="absolute w-full h-1  left-0 right-0"
				style={{ bottom: '0', backgroundColor: 'rgb(255, 132, 115)' }}
				animate={active ? { y: 5, opacity: 1 } : { y: 20, opacity: 0 }}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.4 }}
			/>
			{text}
		</motion.p>
	);
}
let links = [
	{
		url: '/results',
		text: 'Jobs'
	},
	{
		url: '/companies',
		text: 'Companies'
	}
];

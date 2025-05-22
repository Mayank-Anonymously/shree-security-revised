'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QueryModal from '@/components/common/QueryModal';
import { useEffect, useState } from 'react';

const Screen = ({ children }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 2000);
	}, []);
	return (
		<div className='page-wrapper'>
			<Header />
			<QueryModal
				show={show}
				handleClose={() => setShow(false)}
			/>
			{children}
			<Footer />
		</div>
	);
};

export default Screen;

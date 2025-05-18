import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Screen = ({ children }) => {
	return (
		<div className='page-wrapper'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Screen;

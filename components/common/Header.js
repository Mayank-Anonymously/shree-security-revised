import React from 'react';
import PreHeader from './Header/PreHeader';
import MainNav from './Header/MainNav';
import SocialLinks from './Header/SocialLinks';

const Header = () => {
	return (
		<header className='site-header header-style-1'>
			<PreHeader />
			<div className='site-header-menu pbmit-bg-color-global'>
				<div className='container'>
					<div className='pbmit-header-content d-flex align-items-center justify-content-around'>
						<MainNav />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

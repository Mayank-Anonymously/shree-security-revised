import React from 'react';
const SocialLinks = () => (
	<div className='pbmit-right-box d-flex align-items-center'>
		<div className='pbmit-search-cart-box'>
			<div className='pbmit-header-search-btn'>
				<a
					title='Search'
					href='#'>
					<i className='pbmit-base-icon-search-1'></i>
				</a>
			</div>
		</div>
		<ul className='pbmit-social-links'>
			<li className='pbmit-social-li pbmit-social-facebook '>
				<a
					title='Facebook'
					href='#'
					target='_blank'>
					<span>
						<i className='pbmit-base-icon-facebook-f'></i>
					</span>
				</a>
			</li>
			<li className='pbmit-social-li pbmit-social-twitter '>
				<a
					title='Twitter'
					href='#'
					target='_blank'>
					<span>
						<i className='pbmit-base-icon-twitter-1'></i>
					</span>
				</a>
			</li>
			<li className='pbmit-social-li pbmit-social-instagram '>
				<a
					title='Instagram'
					href='#'
					target='_blank'>
					<span>
						<i className='pbmit-base-icon-instagram'></i>
					</span>
				</a>
			</li>
			<li className='pbmit-social-li pbmit-social-youtube '>
				<a
					title='Youtube'
					href='#'
					target='_blank'>
					<span>
						<i className='pbmit-base-icon-youtube-play'></i>
					</span>
				</a>
			</li>
		</ul>
		<div className='pbmit-burger-menu-wrapper'>
			<div className='pbmit-mobile-menu-bg'></div>
			<button
				id='menu-toggle'
				className='nav-menu-toggle'>
				<i className='pbmit-base-icon-menu-1'></i>
			</button>
		</div>
	</div>
);

export default SocialLinks;

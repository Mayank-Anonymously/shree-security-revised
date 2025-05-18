import React from 'react';
const SocialLinks = () => (
	<div className='pbmit-right-box d-flex align-items-center'>
		<div className='pbmit-header-search-btn'>
			<a href='#'>
				<i className='pbmit-base-icon-search-1'></i>
			</a>
		</div>
		<ul className='pbmit-social-links'>
			<li>
				<a href='https://www.facebook.com/'>
					<i className='pbmit-base-icon-facebook-f'></i>
				</a>
			</li>
			<li>
				<a href='https://www.twitter.com/'>
					<i className='pbmit-base-icon-twitter-1'></i>
				</a>
			</li>
			<li>
				<a href='https://www.instagram.com/'>
					<i className='pbmit-base-icon-instagram'></i>
				</a>
			</li>
			<li>
				<a href='https://www.youtube.com/'>
					<i className='pbmit-base-icon-youtube-play'></i>
				</a>
			</li>
		</ul>
	</div>
);

export default SocialLinks;

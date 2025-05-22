import React from 'react';
const SocialLinks = () => (
	<div class='pbmit-right-box d-flex align-items-center'>
		<div class='pbmit-search-cart-box'>
			<div class='pbmit-header-search-btn'>
				<a
					title='Search'
					href='#'>
					<i class='pbmit-base-icon-search-1'></i>
				</a>
			</div>
		</div>
		<ul class='pbmit-social-links'>
			<li class='pbmit-social-li pbmit-social-facebook '>
				<a
					title='Facebook'
					href='#'
					target='_blank'>
					<span>
						<i class='pbmit-base-icon-facebook-f'></i>
					</span>
				</a>
			</li>
			<li class='pbmit-social-li pbmit-social-twitter '>
				<a
					title='Twitter'
					href='#'
					target='_blank'>
					<span>
						<i class='pbmit-base-icon-twitter-1'></i>
					</span>
				</a>
			</li>
			<li class='pbmit-social-li pbmit-social-instagram '>
				<a
					title='Instagram'
					href='#'
					target='_blank'>
					<span>
						<i class='pbmit-base-icon-instagram'></i>
					</span>
				</a>
			</li>
			<li class='pbmit-social-li pbmit-social-youtube '>
				<a
					title='Youtube'
					href='#'
					target='_blank'>
					<span>
						<i class='pbmit-base-icon-youtube-play'></i>
					</span>
				</a>
			</li>
		</ul>
		<div class='pbmit-burger-menu-wrapper'>
			<div class='pbmit-mobile-menu-bg'></div>
			<button
				id='menu-toggle'
				class='nav-menu-toggle'>
				<i class='pbmit-base-icon-menu-1'></i>
			</button>
		</div>
	</div>
);

export default SocialLinks;

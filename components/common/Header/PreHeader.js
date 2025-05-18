import React from 'react';
const PreHeader = () => (
	<div className='pbmit-pre-header-wrapper pbmit-bg-color-blackish'>
		<div className='container'>
			<div className='d-flex justify-content-between'>
				<div className='pbmit-pre-header-left'>
					<ul className='pbmit-contact-info'>
						<li className='pbmit-news'>
							<span>News</span>Alerting Today for a Better Tomorrow.
						</li>
						<li>
							<i className='pbmit-base-icon-mail-alt'></i>{' '}
							<a href='#'>[email&#160;protected]</a>
						</li>
						<li>
							<i className='pbmit-base-icon-map-solid'></i> 250 Main Street, 2nd
							Floor. USA
						</li>
						<li>
							<i className='pbmit-base-icon-phone-call-solid'></i>{' '}
							1-888-452-1505
						</li>
					</ul>
				</div>
				<div className='pbmit-pre-header-right'>
					<ul className='pbmit-contact-info'>
						<li>
							<a href='contact-us.html'>get a quote</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default PreHeader;

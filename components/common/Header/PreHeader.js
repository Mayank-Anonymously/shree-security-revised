import React from 'react';
const PreHeader = () => (
	<div className='pbmit-pre-header-wrapper pbmit-bg-color-blackish'>
		<div className='container'>
			<div className='d-flex justify-content-between'>
				<div className='pbmit-pre-header-left'>
					<ul className='pbmit-contact-info'>
						<li>
							<i className='fa fa-envelope'></i>{' '}
							<a
								href='#'
								className='text-decoration-none text-white'>
								support@shreesecuritycamera.com
							</a>
						</li>
						<li>
							<i className='fa fa-map-marker'></i> A-146, Top Floor, Veer
							Savarkar Block, Block S1, Shakarpur, Delhi, 110092, India
						</li>
						<li>
							<i className='fa fa-phone'></i> +91 9015704448
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default PreHeader;

'use client';
import React from 'react';

const NumberBanner = () => {
	return (
		<>
			<section className='overflow-hidden'>
				<div className='container'>
					<div className='about-us_one'>
						<div className='about-us-one_bg'></div>
						<div className='row'>
							<div className='col-md-2'></div>
							<div className='col-md-8'>
								<div className='pbmit-ihbox-style-4'>
									<div className='pbmit-ihbox-headingicon'>
										<div className='pbmit-ihbox-contents'>
											<h4 className='pbmit-heading'>Let’s Work Together</h4>
											<h2 className='pbmit-title '>
												<a
													href='tel:+919015704448'
													className='text-white text-decoration-none'
													onClick={(e) => {
														e.preventDefault();
														if (typeof window !== 'undefined' && window.gtag) {
															window.gtag('event', 'conversion', {
																send_to: 'AW-16712967012/57KYCMvIztcZEOTGrqE-',
																event_callback: function () {
																	window.location = 'tel:+919015704448';
																},
															});
														} else {
															window.location = 'tel:+919015704448';
														}
													}}>
													+91 9015704448
												</a>
											</h2>
											<div className='pbmit-heading-desc'>
												What are you waiting for to register and start
												<br /> this new adventure?
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-2'></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NumberBanner;

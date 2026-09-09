import React from 'react';

const AboutUs = () => {
	return (
		<section className='about-section_one'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 col-xl-6'>
						<div className='about-one_leftbox'>
							<div className='pbmit-shape-pentagon'>
								<img
									src='images/homepage-1/about-demo1-bg.jpg'
									className='img-fluid'
									alt='shape-one'
								/>
							</div>
							<div className='about-one_img02'>
								<img
									src='images/homepage-1/cctv-ab-01.png'
									className='img-fluid'
									alt='shape-two'
								/>
							</div>
						</div>
					</div>
					<div className='col-md-12 col-xl-6'>
						<div className='about-one_right'>
							<div className='pbmit-heading-subheading animation-style2'>
								<h4 className='pbmit-subtitle'>About Us</h4>
								<h2 className='pbmit-title'>
									Our Commitment is Keeping You Safe.
								</h2>
								<div className='pbmit-heading-desc'>
									Our goal is to keep you safe. At Shree Security Camera, we
									deliver smart, reliable camera and security solutions to
									protect what matters most. From homes to businesses, our
									cutting-edge systems offer 24/7 peace of mind, simple, secure,
									and always watching.
								</div>
							</div>
							<div className='about-one_ihbox'>
								<div className='row'>
									<div className='col-md-6'>
										<div className='pbmit-ihbox-style-2'>
											<div className='pbmit-ihbox-headingicon'>
												<div className='pbmit-ihbox-contents'>
													<h2 className='pbmit-title'>Commercial</h2>
													<h4 className='pbmit-heading'>CCTV System</h4>
													<div className='pbmit-heading-desc'>
														Home security systems detect entry into your home. a
														siren blares and a professional monitor
													</div>
												</div>
											</div>
										</div>
										<div className='about-one_btn'>
											<a
												className='pbmit-btn'
												href='/about-us'>
												<span>More </span>
											</a>
										</div>
									</div>
									<div className='col-md-6 ps-md-0'>
										<div className='pbmit-ihbox-style-2'>
											<div className='pbmit-ihbox-headingicon'>
												<div className='pbmit-ihbox-contents'>
													<h2 className='pbmit-title'>Residential </h2>
													<h4 className='pbmit-heading'>CCTV System</h4>
													<div className='pbmit-heading-desc'>
														systems are integrated electronic devices working
														together with a central control.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutUs;

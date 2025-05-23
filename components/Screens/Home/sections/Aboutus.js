import React from 'react';

const AboutUs = () => {
	return (
		<section class='about-section_one'>
			<div class='container'>
				<div class='row'>
					<div class='col-md-12 col-xl-6'>
						<div class='about-one_leftbox'>
							<div class='pbmit-shape-pentagon'>
								<img
									src='images/homepage-1/about-demo1-bg.jpg'
									class='img-fluid'
									alt='shape-one'
								/>
							</div>
							<div class='about-one_img02'>
								<img
									src='images/homepage-1/cctv-ab-01.png'
									class='img-fluid'
									alt='shape-two'
								/>
							</div>
						</div>
					</div>
					<div class='col-md-12 col-xl-6'>
						<div class='about-one_right'>
							<div class='pbmit-heading-subheading animation-style2'>
								<h4 class='pbmit-subtitle'>About Us</h4>
								<h2 class='pbmit-title'>Our Commitment is Keeping You Safe.</h2>
								<div class='pbmit-heading-desc'>
									Our goal is to keep you safe. At Shree Security Camera, we
									deliver smart, reliable camera and security solutions to
									protect what matters most. From homes to businesses, our
									cutting-edge systems offer 24/7 peace of mind, simple, secure,
									and always watching.
								</div>
							</div>
							<div class='about-one_ihbox'>
								<div class='row'>
									<div class='col-md-6'>
										<div class='pbmit-ihbox-style-2'>
											<div class='pbmit-ihbox-headingicon'>
												<div class='pbmit-ihbox-contents'>
													<h2 class='pbmit-title'>Commercial</h2>
													<h4 class='pbmit-heading'>CCTV System</h4>
													<div class='pbmit-heading-desc'>
														Home security systems detect entry into your home. a
														siren blares and a professional monitor
													</div>
												</div>
											</div>
										</div>
										<div class='about-one_btn'>
											<a
												class='pbmit-btn'
												href='/about-us'>
												<span>More </span>
											</a>
										</div>
									</div>
									<div class='col-md-6 ps-md-0'>
										<div class='pbmit-ihbox-style-2'>
											<div class='pbmit-ihbox-headingicon'>
												<div class='pbmit-ihbox-contents'>
													<h2 class='pbmit-title'>Residential </h2>
													<h4 class='pbmit-heading'>CCTV System</h4>
													<div class='pbmit-heading-desc'>
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

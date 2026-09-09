import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className='footer-style-1 site-footer pbmit-bg-color-light'>
				<div className='pbmit-footer-widget-area'>
					<div className='container'>
						<div className='row'>
							<div className='pbmit-footer-widget-col-1 col-md-6 col-lg-3'>
								<aside className='widget widget_text'>
									<h2 className='widget-title'>Contact Us</h2>
								</aside>
								<aside className='pbm_addons_contact_widget'>
									<div className='pbmit-contact-widget-lines'>
										<div className='pbmit-contact-widget-line pbmit-contact-widget-address'>
											A-146, Top Floor, Veer Savarkar Block, Block S1, <br />
											Shakarpur, Delhi, 110092, India
										</div>
										<div className='pbmit-contact-widget-line pbmit-contact-widget-phone'>
											+91 9015704448
										</div>
										<div className='pbmit-contact-widget-line pbmit-contact-widget-email'>
											<a href='mailto:support@shreesecuritycamera.com'>
												support@shreesecuritycamera.com
											</a>
										</div>
									</div>
								</aside>
							</div>

							<div className='pbmit-footer-widget-col-2 col-md-6 col-lg-3'>
								<div className='widget'>
									<h2 className='widget-title'>Services</h2>
									<div className='textwidget'>
										<ul>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/cctv-installation'>
													CCTV Camera Installation
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/electronic-door-lock'>
													Electronic Door Lock
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/biometric-machine'>
													Biometric &amp; Access Control System
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/video-door-phone'>
													Video Door Phone
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/security-alarm-panel'>
													Security Alarm &amp; Fire Alarm
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/delhi'>
													Delhi Security Cameras
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/noida'>
													Noida Security Cameras
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/gurgaon'>
													Gurgaon Security Cameras
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/services/faridabad'>
													Faridabad Security Cameras
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='pbmit-footer-widget-col-3 col-md-6 col-lg-3'>
								<div className='widget'>
									<h2 className='widget-title'>Our pages</h2>
									<ul>
										<li>
											<a href='/'>Home</a>
										</li>
										<li>
											<a href='/about-us'>About</a>
										</li>
										<li>
											<a href='/services'>All Services</a>
										</li>
										<li>
											<a href='/privacy-policy'>Privacy Policy</a>
										</li>
										<li>
											<a href='/terms-and-conditions'>Terms &amp; Conditions</a>
										</li>
										<li>
											<a href='/services/delhi'>Delhi</a>
										</li>
										<li>
											<a href='/services/noida'>Noida</a>
										</li>
										<li>
											<a href='/services/gurgaon'>Gurgaon</a>
										</li>
										<li>
											<a href='/services/faridabad'>Faridabad</a>
										</li>
										<li>
											<a href='/contact-us'>Contact us</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='pbmit-footer-widget-col-3 col-md-6 col-lg-3'>
								<div className='widget'>
									<h2 className='widget-title'>Opening Hours</h2>
									<ul className='pbmit-timelist-list'>
										<li>
											<span className='pbmit-timelist-li-title'>Monday</span>
											<span className='pbmit-timeline-timming'> 8am - 2pm</span>
										</li>
										<li>
											<span className='pbmit-timelist-li-title'>Tuesday</span>
											<span className='pbmit-timeline-timming'>
												{' '}
												10am - 4pm
											</span>
										</li>
										<li>
											<span className='pbmit-timelist-li-title'>Wednesday</span>
											<span className='pbmit-timeline-timming'>
												{' '}
												11am - 4pm
											</span>
										</li>
										<li>
											<span>* Close on public holidays</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='pbmit-footer-text-area'>
					<div className='container'>
						<div className='pbmit-footer-text-inner'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='pbmit-footer-copyright-text-area'>
										© Copyright 2026 The <a href='/'>Shree Security Camera</a>{' '}
										All Rights Reserved.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

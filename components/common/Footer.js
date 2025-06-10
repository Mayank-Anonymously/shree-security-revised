import React from 'react';

const Footer = () => {
	return (
		<>
			<footer class='footer-style-1 site-footer pbmit-bg-color-light'>
				<div class='footer-wrap pbmit-footer-big-area'>
					<div class='container'>
						<div class='row'>
							<div class='col-md-12'>
								<form>
									<div class='pbmit-footer-newsletter'>
										<div class='pbmit-footer-icon-title d-flex align-items-center'>
											<i class='pbmit-base-icon-mailbox-new'></i>
											<h3 class='pbmit-footer-title'>
												Subscribe To <br />
												Our Newsletter
											</h3>
										</div>
										<div class='pbmit-footer-email-button'>
											<input
												type='email'
												class='form-control'
												name='EMAIL'
												placeholder='Your email address'
											/>
											<button>send us</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class='pbmit-footer-widget-area'>
					<div class='container'>
						<div class='row'>
							<div class='pbmit-footer-widget-col-1 col-md-6 col-lg-3'>
								<aside class='widget widget_text'>
									<h2 class='widget-title'>Contact Us</h2>
								</aside>
								<aside class='pbm_addons_contact_widget'>
									<div class='pbmit-contact-widget-lines'>
										<div class='pbmit-contact-widget-line pbmit-contact-widget-address'>
											A-146, Top Floor, Veer Savarkar Block, Block S1, <br />{' '}
											Shakarpur, Delhi, 110092, India
										</div>
										<div class='pbmit-contact-widget-line pbmit-contact-widget-phone'>
											+91 9015704448
										</div>
										<div class='pbmit-contact-widget-line pbmit-contact-widget-email'>
											<a
												href='/'
												class='__cf_email__'
												data-cfemail='204e4f0d5245504c596050424d494e464f544543480e434f4d'>
												support@shreesecuritycamera.com
											</a>
										</div>
									</div>
								</aside>
							</div>
							<div class='pbmit-footer-widget-col-2 col-md-6 col-lg-3'>
								<div class='widget'>
									<h2 class='widget-title'>Services</h2>
									<div class='textwidget'>
										<ul>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/service/cctv-installation'>
													CCTV Camera Installation
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/service/electronic-door-lock'>
													Electronic Door Lock
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/service/biometric-machine'>
													Biometric &amp; Access Control System
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/service/video-door-phone'>
													Video Door Phone
												</a>
											</li>
											<li>
												<a
													className='text-decoration-none text-black'
													href='/service/security-alarm-panel'>
													Security Alarm &amp; Fire Alarm
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div class='pbmit-footer-widget-col-3 col-md-6 col-lg-3'>
								<div class='widget'>
									<h2 class='widget-title'>Our pages</h2>
									<ul>
										<li>
											<a href='about-us'>About</a>
										</li>
										<li>
											<a href='contact-us'>Contact us</a>
										</li>
										<li>
											<a href='/'>Latest Blog</a>
										</li>
									</ul>
								</div>
							</div>
							<div class='pbmit-footer-widget-col-3 col-md-6 col-lg-3'>
								<div class='widget'>
									<h2 class='widget-title'>Opening Hours</h2>
									<ul class='pbmit-timelist-list'>
										<li>
											<span class='pbmit-timelist-li-title'>Monday</span>
											<span class='pbmit-timeline-timming'> 8am - 2pm</span>
										</li>
										<li>
											<span class='pbmit-timelist-li-title'>Tuesday</span>
											<span class='pbmit-timeline-timming'> 10am - 4pm</span>
										</li>
										<li>
											<span class='pbmit-timelist-li-title'>Wednesday</span>
											<span class='pbmit-timeline-timming'> 11am - 4pm</span>
										</li>
										<li>
											<span>* Close on public holidays</span>
										</li>
									</ul>
								</div>
								<ul class='pbmit-social-links'>
									<li class='pbmit-social-li pbmit-social-facebook'>
										<a
											href='https://www.facebook.com/'
											target='_blank'>
											<span>
												<i class='pbmit-base-icon-facebook-f'></i>
											</span>
										</a>
									</li>
									<li class='pbmit-social-li pbmit-social-twitter'>
										<a
											href='https://www.twitter.com/'
											target='_blank'>
											<span>
												<i class='pbmit-base-icon-twitter-1'></i>
											</span>
										</a>
									</li>
									<li class='pbmit-social-li pbmit-social-instagram'>
										<a
											href='https://www.instagram.com/'
											target='_blank'>
											<span>
												<i class='pbmit-base-icon-instagram'></i>
											</span>
										</a>
									</li>
									<li class='pbmit-social-li pbmit-social-youtube'>
										<a
											href='https://www.youtube.com/'
											target='_blank'>
											<span>
												<i class='pbmit-base-icon-youtube-play'></i>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class='pbmit-footer-text-area'>
					<div class='container'>
						<div class='pbmit-footer-text-inner'>
							<div class='row'>
								<div class='col-md-12'>
									<div class='pbmit-footer-copyright-text-area'>
										© Copyright 2025 The <a href='/'>Shree Security Camera</a>{' '}
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

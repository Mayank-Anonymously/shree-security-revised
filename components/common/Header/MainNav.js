import React from 'react';
const MainNav = () => (
	<div className='pbmit-logo-menuarea d-flex align-items-center'>
		<div className='site-branding'>
			<h1 className='site-title'>
				<a href='/'>
					<img
						className='logo-img'
						src='/images/logo-white.png'
						alt='Protecta'
					/>
				</a>
			</h1>
		</div>
		<div className='site-navigation'>
			<nav className='main-menu navbar-expand-xl navbar-light'>
				<div className='navbar-header'>
					<button
						className='navbar-toggler'
						type='button'>
						<i className='pbmit-base-icon-menu-1'></i>
					</button>
				</div>
				<div className='pbmit-mobile-menu-bg'></div>
				<div
					className='collapse navbar-collapse show'
					id='pbmit-menu'>
					<div className='pbmit-menu-wrap'>
						<span className='closepanel'>×</span>
						<ul className='navigation clearfix'>
							<li className=''>
								<a className='text-decoration-none'>Home</a>
							</li>
							<li className=''>
								<a
									href='/contact-us'
									className='text-decoration-none'>
									Contact Us
								</a>
							</li>
							<li className=''>
								<a
									href='/about-us'
									className='text-decoration-none'>
									About Us
								</a>
							</li>
							<li className='dropdown active'>
								<a className='text-decoration-none'>Services</a>
								<ul>
									<li>
										<a
											className='text-decoration-none'
											href='/service/cctv-installation'>
											CCTV Camera Installation
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/service/electronic-door-lock'>
											Electronic Door Lock
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/service/biometric-machine'>
											Biometric &amp; Access Control System
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/service/video-door-phone'>
											Video Door Phone
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/service/security-alarm-panel'>
											Security Alarm &amp; Fire Alarm
										</a>
									</li>
								</ul>
							</li>
							<li className='dropdown'>
								<div
									class='trustpilot-widget'
									data-locale='en-US'
									data-template-id='56278e9abfbbba0bdcd568bc'
									data-businessunit-id='684421b7d7a3da69939e110b'
									style={{
										height: '52px',
										width: '100%',
										marginTop: '20px',
									}}>
									<a
										href='https://www.trustpilot.com/review/shreesecuritycamera.com'
										target='_blank'
										rel='noopener'>
										Trustpilot
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
);

export default MainNav;

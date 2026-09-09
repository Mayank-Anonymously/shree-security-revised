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
								<a
									href='/'
									className='text-decoration-none'>
									Home
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
								<a
									href='/services'
									className='text-decoration-none'>
									Services
								</a>
								<ul>
									<li>
										<a
											className='text-decoration-none'
											href='/services/cctv-installation'>
											CCTV Camera Installation
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/services/electronic-door-lock'>
											Electronic Door Lock
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/services/biometric-machine'>
											Biometric &amp; Access Control System
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/services/video-door-phone'>
											Video Door Phone
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/services/security-alarm-panel'>
											Security Alarm &amp; Fire Alarm
										</a>
									</li>
								</ul>
							</li>
							<li className=''>
								<a
									href='/services/delhi'
									className='text-decoration-none'>
									Delhi Security Cameras
								</a>
							</li>
							<li className=''>
								<a
									href='/services/noida'
									className='text-decoration-none'>
									Noida Security Cameras
								</a>
							</li>
							<li className=''>
								<a
									href='/services/gurgaon'
									className='text-decoration-none'>
									Gurgaon Security Cameras
								</a>
							</li>
							<li className=''>
								<a
									href='/services/faridabad'
									className='text-decoration-none'>
									Faridabad Security Cameras
								</a>
							</li>
							<li className=''>
								<a
									href='/contact-us'
									className='text-decoration-none'>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
);

export default MainNav;

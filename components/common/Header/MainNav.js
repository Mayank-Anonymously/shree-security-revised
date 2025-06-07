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
							{/* <li className='dropdown active'>
								<a className='text-decoration-none'>Locations</a>
								<ul>
									<li>
										<a
											className='text-decoration-none'
											href='/location/cctv-installation-in-delhi'>
											CCTV Repair in Delhi
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/location/cctv-installation-in-noida'>
											CCTV Repair in Noida
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/location/cctv-installation-in-gurgaon'>
											CCTV Repair in Gurgaon
										</a>
									</li>
									<li>
										<a
											className='text-decoration-none'
											href='/location/cctv-installation-in-faridabad'>
											CCTV Repair in Faridabad
										</a>
									</li>
								</ul>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
);

export default MainNav;

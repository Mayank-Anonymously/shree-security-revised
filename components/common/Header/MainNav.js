import React from 'react';
const MainNav = () => (
	<div className='pbmit-logo-menuarea d-flex align-items-center'>
		<div className='site-branding'>
			<h1 className='site-title'>
				<a href='/'>
					<img
						className='logo-img'
						src='/images/logo-white.svg'
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
							<li className='dropdown active'>
								<a
									href='/index-2.html'
									className='text-decoration-none'>
									Home
								</a>
								<ul>
									<li className='active'>
										<a href='/index-2.html'>CCTV Security</a>
									</li>
									<li>
										<a
											href='/homepage-2.html'
											className='text-decoration-none'>
											Security Guard
										</a>
									</li>
									<li>
										<a
											href='/homepage-3.html'
											className='text-decoration-none'>
											Locksmith
										</a>
									</li>
								</ul>
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
								<a
									href='/index-2.html'
									className='text-decoration-none'>
									Services
								</a>
								<ul>
									<li className='active'>
										<a
											href='/index-2.html'
											className='text-decoration-none'>
											CCTV Security
										</a>
									</li>
									<li>
										<a
											href='/homepage-2.html'
											className='text-decoration-none'>
											Security Guard
										</a>
									</li>
									<li>
										<a
											href='/homepage-3.html'
											className='text-decoration-none'>
											Locksmith
										</a>
									</li>
								</ul>
							</li>
							<li className='dropdown active'>
								<a
									href='/index-2.html'
									className='text-decoration-none'>
									Locations
								</a>
								<ul>
									<li className='active'>
										<a
											href='/index-2.html'
											className='text-decoration-none'>
											CCTV Security
										</a>
									</li>
									<li>
										<a
											href='/homepage-2.html'
											className='text-decoration-none'>
											Security Guard
										</a>
									</li>
									<li>
										<a
											href='/homepage-3.html'
											className='text-decoration-none'>
											Locksmith
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
);

export default MainNav;

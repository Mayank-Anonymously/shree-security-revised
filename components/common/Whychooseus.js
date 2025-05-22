'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Whychooseus = () => {
	useEffect(() => {
		AOS.init({ once: true });
	}, []);

	return (
		<section className='progress-section_one'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 col-xl-6'>
						<div className='pbmit-animation-style3'>
							<div className='mt-5'>
								<img
									src='/images/homepage-1/security.png'
									className='img-fluid'
									alt='Security'
								/>
							</div>
						</div>
					</div>

					<div className='col-md-12 col-xl-6'>
						<div className='progress-one_right'>
							<div className='pbmit-heading-subheading animation-style2'>
								<h4 className='pbmit-subtitle'>Why people choose us?</h4>
								<h2 className='pbmit-title'>
									We Provide Latest <br /> CCTV Cameras
								</h2>
								<div className='pbmit-heading-desc'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
									enim ad minim veniam quis nostrud exercitation ullamco.
								</div>
							</div>

							{[
								{ label: 'Commercial CCTV System', value: 75 },
								{ label: 'Office & Industrial Security', value: 85 },
								{ label: 'School & Hospital Security', value: 95 },
								{ label: 'Mall & super store Security', value: 80 },
							].map((bar, idx) => (
								<div
									className='progressbar'
									key={idx}>
									<span className='progress-label'>{bar.label}</span>
									<div className='progress progress-lg progress-percent-bg'>
										<div
											className='progress-bar aos'
											data-aos='slide-right'
											data-aos-delay='200'
											data-aos-duration='1000'
											data-aos-easing='ease-in-out'
											role='progressbar'
											aria-valuenow={bar.value}
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: `${bar.value}%` }}>
											<span className='progress-percent'>{bar.value}%</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Whychooseus;

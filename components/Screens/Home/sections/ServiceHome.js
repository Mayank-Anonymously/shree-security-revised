'use client';

import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const serviceItems = [
	{
		image: 'images/homepage-1/service/service-03.jpg',
		icon: 'pbmit-protecta-icon-house',
		title: 'Cyber Security Specialist',
	},
	{
		image: 'images/homepage-1/service/service-04.jpg',
		icon: 'pbmit-protecta-icon-cctv-camera',
		title: 'Institute CCTV Security',
	},
	{
		image: 'images/homepage-1/service/service-05.jpg',
		icon: 'pbmit-protecta-icon-surveillance-camera',
		title: 'Banking Sector Outside',
	},
	{
		image: 'images/homepage-1/service/service-01.jpg',
		icon: 'pbmit-protecta-icon-cctv-1',
		title: 'Private Sector Security',
	},
	{
		image: 'images/homepage-1/service/service-02.jpg',
		icon: 'pbmit-protecta-icon-surveillance',
		title: 'Mall & Super Store Security',
	},
];

const sliderSettings = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1024,
			settings: { slidesToShow: 3 },
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 480,
			settings: { slidesToShow: 1 },
		},
	],
};

const ServiceHome = () => {
	return (
		<section className='section-xl service-one_bg'>
			<div className='container-fluid'>
				<div className='service-one-top_area'>
					<div className='pbmit-heading-subheading animation-style2'>
						<h4 className='pbmit-subtitle'>Services</h4>
						<h2 className='pbmit-title'>What We Do</h2>
					</div>
					<a
						className='pbmit-btn pbmit-btn-outline'
						href='service-details.html'>
						<span>Show All Service</span>
					</a>
				</div>

				<Slider {...sliderSettings}>
					{serviceItems.map((item, idx) => (
						<div
							className='slider-item'
							key={idx}>
							<div className='pbmit-service-style-1'>
								<div className='pbminfotech-post-item'>
									<div className='pbminfotech-post-item-inner'>
										<div className='pbmit-service-image-wrapper'>
											<div
												className='pbmit-service-bg-image'
												style={{ backgroundImage: `url(${item.image})` }}
											/>
										</div>
										<div className='pbminfotech-box-content'>
											<div className='pbmit-box-content-inner'>
												<div className='pbmit-service-icon-wrapper'>
													<i className={`pbmit-protecta-icon ${item.icon}`}></i>
												</div>
												<h3 className='pbmit-service-title'>
													<a href='service-details.html'>{item.title}</a>
												</h3>
												<div className='pbmit-service-content'>
													<p>
														Sed do eiusmod tempor incididunt ut labore et dolore
														magna aliqua enim ad minim veniam.
													</p>
												</div>
												<div className='pbmit-service-btn'>
													<a href='service-details.html'>
														<span>Read More</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default ServiceHome;

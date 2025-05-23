'use client';

import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsBank2 } from 'react-icons/bs';
import { GiCctvCamera } from 'react-icons/gi';
import { MdBroadcastOnHome } from 'react-icons/md';
import { MdCorporateFare } from 'react-icons/md';
import { BsFillBuildingsFill } from 'react-icons/bs';
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const serviceItems = [
	{
		image: 'images/homepage-1/service/service-03.jpg',
		icon: <MdBroadcastOnHome />,
		title: 'Cyber Security Specialist',
		shortDesc:
			'We safeguard your digital space with advanced threat detection, data protection, and proactive monitoring, so your systems stay secure, and your peace of mind stays intact.',
	},
	{
		image: 'images/homepage-1/service/service-04.jpg',
		icon: <GiCctvCamera />,
		title: 'Institute CCTV Security',
		shortDesc:
			'We provide tailored CCTV solutions for schools, colleges, and institutions therefore, ensuring a safe, monitored environment that protects students, staff, and property around the clock.',
	},
	{
		image: 'images/homepage-1/service/service-05.jpg',
		icon: <BsBank2 />,
		title: 'Banking Sector Outside',
		shortDesc:
			'Our robust outdoor CCTV systems for banks offer high-resolution surveillance, tamper-proof hardware, and 24/7 monitoring, securing ATMs, entrances, and perimeters against 	threats and unauthorized activity.',
	},
	{
		image: 'images/homepage-1/service/service-01.jpg',
		icon: <MdCorporateFare />,
		title: 'Private Sector Security',
		shortDesc:
			'We deliver smart, scalable security solutions for the private sector, protecting offices, assets, and personnel with advanced surveillance technology tailored to your business needs.',
	},
	{
		image: 'images/homepage-1/service/service-02.jpg',
		icon: <BsFillBuildingsFill />,
		title: 'Mall & Super Store Security',
		shortDesc:
			'Our CCTV systems for malls and superstores ensure wide-area coverage, real-time monitoring, and theft prevention which keeps customers safe and operations running smoothly.',
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
						href='#'>
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
													{item.icon}
												</div>
												<h3 className='pbmit-service-title'>
													<a
														href='#'
														className='text-decoration-none'>
														{item.title}
													</a>
												</h3>
												<div className='pbmit-service-content'>
													<p>
														Sed do eiusmod tempor incididunt ut labore et dolore
														magna aliqua enim ad minim veniam.
													</p>
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

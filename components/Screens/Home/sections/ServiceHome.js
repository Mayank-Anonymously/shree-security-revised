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
		title: 'CCTV Camera Installation',
		shortDesc:
			'Professional CCTV installation for homes, offices, shops, schools, and commercial properties across Noida, Gurgaon, and Faridabad.',
		link: '/services/cctv-installation',
	},
	{
		image: 'images/homepage-1/service/service-04.jpg',
		icon: <GiCctvCamera />,
		title: 'Biometric & Access Control',
		shortDesc:
			'Secure your premises with biometric attendance, RFID access, and smart entry systems built for controlled access and employee safety.',
		link: '/services/biometric-machine',
	},
	{
		image: 'images/homepage-1/service/service-05.jpg',
		icon: <BsBank2 />,
		title: 'Electronic Door Lock',
		shortDesc:
			'Upgrade to smart and secure locking systems for homes, offices, and storefronts with keyless convenience and stronger access control.',
		link: '/services/electronic-door-lock',
	},
	{
		image: 'images/homepage-1/service/service-01.jpg',
		icon: <MdCorporateFare />,
		title: 'Video Door Phone',
		shortDesc:
			'See and speak with visitors before opening the door with modern video door phones for apartments, villas, and office entrances.',
		link: '/services/video-door-phone',
	},
	{
		image: 'images/homepage-1/service/service-02.jpg',
		icon: <BsFillBuildingsFill />,
		title: 'Security Alarm & Fire Alarm',
		shortDesc:
			'Protect your property with smart alarm systems, intruder detection, and fire alarm solutions for a safer residential or business environment.',
		link: '/services/security-alarm-panel',
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
						href='/services'>
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
														href={item.link}
														className='text-decoration-none'>
														{item.title}
													</a>
												</h3>
												<div className='pbmit-service-content'>
													<p>{item.shortDesc}</p>
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

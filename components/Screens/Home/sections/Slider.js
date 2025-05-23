'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
	{
		id: 1,
		title: 'CCTV Security Solutions',
		subtitle: 'A New Freedom of Security',
		description:
			'Discover various fun learning for your 5 to 12 year-old children with our programs and the master teachers.',
		image: '/images/slider1-img1.jpg',
		videoIcon: '/images/video-icon.png',
	},
	{
		id: 2,
		title: 'Professional Guard Services',
		subtitle: 'Trained & Reliable',
		description:
			'Secure your premises with our expert team and advanced protocols.',
		image: '/images/slider1-img2.jpg',
		videoIcon: '/images/video-icon.png',
	},
	{
		id: 3,
		title: '24/7 Monitoring',
		subtitle: 'Peace of Mind',
		description: 'Always watching, always ready to act.',
		image: '/images/slider1-img1.jpg',
		videoIcon: '/images/video-icon.png',
	},
];

const SliderComponent = () => {
	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div>
			<Slider {...settings}>
				{slides.map((slide) => (
					<div key={slide.id}>
						<div
							style={{
								backgroundImage: `url(${slide.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								height: '100vh',
								position: 'relative',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							{/* Overlay */}
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: 'rgba(0, 0, 0, 0.5)',
									zIndex: 1,
								}}
							/>

							{/* Content */}
							<div
								style={{
									position: 'relative',
									zIndex: 2,
									textAlign: 'center',
									color: '#fff',
									padding: '0 20px',
									maxWidth: '800px',
								}}>
								<h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
									{slide.title}
								</h2>
								<h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
									{slide.subtitle}
								</h4>
								<p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
									{slide.description}
								</p>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										gap: '20px',
										flexWrap: 'wrap',
									}}>
									<button
										style={{
											padding: '12px 30px',
											backgroundColor: '#007BFF',
											border: 'none',
											borderRadius: '4px',
											color: '#fff',
											fontSize: '1rem',
											cursor: 'pointer',
										}}>
										Contact Now
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SliderComponent;

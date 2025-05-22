// components/IhboxSlider.js
'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
	{
		img: '/images/homepage-2/ihbox/img-01.jpg',
		alt: 'World Class Trained Guard',
		title: 'World Class Trained Guard',
		iconClass: 'pbmit-protecta-icon-security-guard',
	},
	{
		img: '/images/homepage-2/ihbox/img-02.jpg',
		alt: 'No1 Security System',
		title: 'No1 Security System',
		iconClass: 'pbmit-protecta-icon-arc',
	},
	{
		img: '/images/homepage-2/ihbox/img-03.jpg',
		alt: 'Our Mission & Value',
		title: 'Our Mission & Value',
		iconClass: 'pbmit-protecta-icon-avatar',
	},
	{
		img: '/images/homepage-2/ihbox/img-04.jpg',
		alt: 'World Class Trained Guard',
		title: 'World Class Trained Guard',
		iconClass: 'pbmit-protecta-icon-toolbox',
	},
];

const IhboxSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className='section-lgb ihbox-section'>
			<div className='container'>
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<div
							key={index}
							className='pbmit-miconheading-style-5'>
							<div className='pbmit-ihbox-style-5'>
								<div className='pbmit-ihbox-box'>
									<div className='pbmit-feature-wrapper-img'>
										<div className='pbmit-ihbox-wrapper'>
											<div className='pbmit-ihbox-icon-type-image'>
												<Image
													src={slide.img}
													alt={slide.alt}
													width={600}
													height={400}
													className='img-fluid'
												/>
											</div>
										</div>
									</div>
									<div className='pbmit-title-icon-meta'>
										<div className='pbmit-meta-inner'>
											<h2 className='pbmit-element-title'>{slide.title}</h2>
											<div className='pbmit-ihbox-icon'>
												<div className='pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon'>
													<div className='pbmit-icon-wrapper pbmit-icon-type-icon'>
														<i
															className={`pbmit-protecta-icon ${slide.iconClass}`}></i>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='pbmit-box-content'>
										<div className='pbmit-box-content-inner d-flex align-items-center'>
											<div className='pbmit-ihbox-icon'>
												<div className='pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-icon'>
													<div className='pbmit-icon-wrapper pbmit-icon-type-icon'>
														<i
															className={`pbmit-protecta-icon ${slide.iconClass}`}></i>
													</div>
												</div>
											</div>
											<h2 className='pbmit-element-title'>{slide.title}</h2>
										</div>
										<div className='pbmit-heading-desc'>
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua enim ad minim veniam.
										</div>
										<div className='pbmit-ihbox-btn'>
											<a href='/contact-us'>
												<span className='pbmit-button-wrapper'>
													<span className='pbmit-button-text'>Read More</span>
												</span>
											</a>
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

export default IhboxSlider;

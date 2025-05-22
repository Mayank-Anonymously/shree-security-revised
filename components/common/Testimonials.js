'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);

	const slickSettings = {
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const testimonials = [
		{
			img: 'images/homepage-1/testimonial/testimonial-01.jpg',
			name: 'Carla Hall',
			title: 'Market Analyst',
		},
		{
			img: 'images/homepage-1/testimonial/testimonial-02.jpg',
			name: 'Gordon Ramsay',
			title: 'Manager',
		},
		{
			img: 'images/homepage-1/testimonial/testimonial-03.jpg',
			name: 'Paula Deen',
			title: 'Quotation',
		},
	];

	return (
		<section className='section-lg testimonial_one'>
			<div className='container'>
				<div className='row'>
					{/* Left Section */}
					<div className='col-md-12 col-xl-6'>
						<div className='testimonial-one_leftbox'>
							<div
								className='pbmit-heading-subheading animation-style2'
								data-aos='fade-right'>
								<h4 className='pbmit-subtitle'>Testimonials</h4>
								<h2 className='pbmit-title'>
									What Our Clients <br /> Say About Us
								</h2>
							</div>
							<div className='testimonial-one_map'>
								<img
									src='images/homepage-1/testimonial-map.png'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='testimonial-author_img1'>
								<img
									src='images/homepage-1/testimonial-author-01.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='testimonial-author_img2'>
								<img
									src='images/homepage-1/testimonial-author-02.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='testimonial-author_img3'>
								<img
									src='images/homepage-1/testimonial-author-03.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='testimonial-author_img4'>
								<img
									src='images/homepage-1/testimonial-author-04.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div>
								<img
									src='images/homepage-1/testimonial-pentagone-shape.png'
									alt=''
								/>
							</div>
							<div className='testimonial-author_img5'>
								<img
									src='images/homepage-1/testimonial-author-05.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
						</div>
					</div>

					{/* Right Section */}
					<div className='col-md-12 col-xl-6 p-0'>
						<div className='testimonial-one_right'>
							<div
								className='fid-style_box'
								data-aos='fade-down'>
								<div className='pbminfotech-ele-fid-style-2'>
									<div className='pbmit-fld-contents'>
										<div className='pbmit-fld-wrap'>
											<div className='pbmit-sbox-icon-wrapper'>
												<div className='pbmit-icon-wrapper pbmit-icon-type-icon'>
													<i className='pbmit-protecta-icon pbmit-protecta-icon-star-1'></i>
												</div>
											</div>
											<h4 className='pbmit-fid-inner'>
												<span className='pbmit-number-rotate'>4.8</span>
											</h4>
											<h3 className='pbmit-fid-title'>
												Rating from
												<br />
												100+ Clients
											</h3>
										</div>
									</div>
								</div>
							</div>

							<div className='testimonial-one_bg'>
								<div className='testimonial-one_main'>
									<Slider {...slickSettings}>
										{testimonials.map((item, index) => (
											<div key={index}>
												<article className='pbmit-testimonial-style-2'>
													<div className='pbminfotech-post-item'>
														<div className='pbminfotech-post-item-inner'>
															<div className='pbminfotech-box-desc'>
																<blockquote className='pbminfotech-testimonial-text'>
																	<p>
																		“I love going to this school! The teachers
																		are friendly and helpful, and I always have
																		so much fun learning new things with my
																		classmates.”
																	</p>
																</blockquote>
															</div>
															<div className='pbminfotech-box-author'>
																<div className='pbminfotech-box-img'>
																	<div className='pbmit-featured-img-wrapper'>
																		<div className='pbmit-featured-wrapper'>
																			<img
																				src={item.img}
																				alt={item.name}
																			/>
																		</div>
																	</div>
																</div>
																<div className='pbmit-auther-content'>
																	<h3 className='pbminfotech-box-title'>
																		{item.name}
																	</h3>
																	<div className='pbminfotech-testimonial-detail'>
																		{item.title}
																	</div>
																</div>
															</div>
														</div>
													</div>
												</article>
											</div>
										))}
									</Slider>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

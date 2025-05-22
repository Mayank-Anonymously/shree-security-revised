'use client';

import Slider from 'react-slick';
import Image from 'next/image';

const teamMembers = [
	{
		name: 'Eliana Ivv',
		position: 'General Manager',
		image: '/images/homepage-3/team/team-01.jpg',
	},
	{
		name: 'Bryan Knight',
		position: 'CCTV Expert',
		image: '/images/homepage-3/team/team-02.jpg',
	},
	{
		name: 'Justin Novak',
		position: 'Ceo/Founder',
		image: '/images/homepage-3/team/team-03.jpg',
	},
	{
		name: 'Edward Smith',
		position: 'Investment Expert',
		image: '/images/homepage-3/team/team-04.jpg',
	},
	{
		name: 'Norton Berry',
		position: 'Managing Director',
		image: '/images/homepage-3/team/team-05.jpg',
	},
	{
		name: 'Henry David',
		position: 'General Manager',
		image: '/images/homepage-3/team/team-06.jpg',
	},
];

const TeamSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
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

	return (
		<section className='team-three_bg section-xl'>
			<div className='container p-0'>
				<div className='pbmit-heading-subheading text-center'>
					<h4 className='pbmit-subtitle'>Team Members</h4>
					<h2 className='pbmit-title'>
						Meet Our Security <br /> Experts Team
					</h2>
				</div>

				<Slider {...settings}>
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className='pbmit-team-style-1'>
							<div className='pbminfotech-post-item'>
								<div className='pbmit-featured-wrap'>
									<div className='pbmit-featured-img-wrapper'>
										<div className='pbmit-featured-wrapper'>
											<Image
												src={member.image}
												alt={member.name}
												width={400}
												height={400}
												className='img-fluid'
											/>
										</div>
									</div>
								</div>
								<div className='pbminfotech-box-content'>
									<div className='pbminfotech-box-content-inner'>
										<h3 className='pbmit-team-title'>
											<a href='/team-single-detail'>{member.name}</a>
										</h3>
										<div className='pbminfotech-team-position'>
											<div className='pbminfotech-box-team-position'>
												{member.position}
											</div>
										</div>
									</div>
									<div className='pbminfotech-social-box'>
										<div className='pbminfotech-box-social-links'>
											<ul className='pbmit-social-links pbmit-team-social-links'>
												{[
													'facebook-f',
													'twitter-1',
													'linkedin-in',
													'instagram',
												].map((platform) => (
													<li
														key={platform}
														className={`pbmit-social-li pbmit-social-${platform}`}>
														<a
															href='#'
															title={platform}
															target='_blank'
															rel='noopener noreferrer'>
															<span>
																<i
																	className={`pbmit-base-icon-${platform}`}></i>
															</span>
														</a>
													</li>
												))}
											</ul>
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

export default TeamSlider;

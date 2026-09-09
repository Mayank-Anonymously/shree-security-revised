'use client';
import React from 'react';
import InfoBox from './Infobox';
import ContactForm from './ContactForm';
import MapEmbed from './EmbedMap';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'Shree Security Camera',
	telephone: '+91 9015704448',
	email: 'support@shreesecuritycamera.com',
	url: 'https://www.shreesecuritycamera.com',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'A-146, Top Floor, Veer Savarkar Block, Block S1, Shakarpur',
		addressLocality: 'Delhi',
		postalCode: '110092',
		addressCountry: 'IN',
	},
	areaServed: ['Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Delhi NCR'],
	description:
		'CCTV installation, biometric access control, electronic door locks, video door phones, and security alarm systems in Delhi, Noida, Gurgaon, and Faridabad.',
};

const ContactContent = () => {
	return (
		<div className='page-content'>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<section className='section-xl ihbox_section'>
				<div className='container'>
					<div className='row'>
						<InfoBox
							icon='fa-map-marker'
							title='Location'>
							<p>
								A-146, Top Floor, Veer Savarkar Block, Block S1, Shakarpur,
								Delhi, 110092, India
							</p>
						</InfoBox>
						<InfoBox
							icon='fa-phone'
							title='Call Us'>
							<p>
								Mobile:{' '}
								<a
									href='tel:+919015704448'
									className='text-decoration-none text-black'
									onClick={(e) => {
										e.preventDefault();
										if (typeof window !== 'undefined' && window.gtag) {
											window.gtag('event', 'conversion', {
												send_to: 'AW-16712967012/57KYCMvIztcZEOTGrqE-',
												event_callback: function () {
													window.location = 'tel:+919015704448';
												},
											});
										} else {
											window.location = 'tel:+919015704448';
										}
									}}>
									+91-9015704448
								</a>
							</p>
						</InfoBox>
						<InfoBox
							icon='fa-envelope'
							title='Email Us'>
							<p>
								<a
									href='mailto:support@shreesecuritycamera.com'
									className='text-decoration-none text-black'>
									support@shreesecuritycamera.com
								</a>
							</p>
						</InfoBox>
					</div>
				</div>
			</section>

			<section className='section-lg'>
				<div className='container'>
					<div className='row g-4'>
						<div className='col-lg-7'>
							<div className='bg-light rounded-4 p-4 p-lg-5'>
								<h2 className='mb-3'>
									Security services across Delhi and Delhi NCR
								</h2>
								<p className='text-muted mb-3'>
									We provide CCTV installation, access control, biometric
									systems, video door phones, and alarm solutions for homes,
									offices, commercial spaces, apartments, and industrial sites
									in Delhi, Noida, Gurgaon, and Faridabad.
								</p>
								<ul className='list-unstyled mb-0 text-muted'>
									<li className='mb-2'>• Delhi</li>
									<li className='mb-2'>• Noida</li>
									<li className='mb-2'>• Gurgaon</li>
									<li>• Faridabad</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='bg-white border rounded-4 p-4 shadow-sm h-100'>
								<h3 className='mb-3'>Quick response</h3>
								<p className='text-muted mb-2'>
									Need a fast site visit or security consultation in Delhi or
									nearby areas?
								</p>
								<p className='mb-2'>
									<a
										href='tel:+919015704448'
										className='text-decoration-none text-black fw-bold'
										onClick={(e) => {
											e.preventDefault();
											if (typeof window !== 'undefined' && window.gtag) {
												window.gtag('event', 'conversion', {
													send_to: 'AW-16712967012/57KYCMvIztcZEOTGrqE-',
													event_callback: function () {
														window.location = 'tel:+919015704448';
													},
												});
											} else {
												window.location = 'tel:+919015704448';
											}
										}}>
										+91-9015704448
									</a>
								</p>
								<p className='mb-0'>
									<a
										href='mailto:support@shreesecuritycamera.com'
										className='text-decoration-none text-black'>
										support@shreesecuritycamera.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='section-lg contact-section'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6 col-md-12 mb-5 mb-lg-0'>
							<div className='contact-form'>
								<div className='ot-heading mb-3'>
									<h2 className='main-heading'>Get In Touch</h2>
								</div>
								<ContactForm />
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<MapEmbed />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactContent;

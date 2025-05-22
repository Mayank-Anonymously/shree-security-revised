import React from 'react';
import InfoBox from './Infobox';
import ContactForm from './ContactForm';
import MapEmbed from './EmbedMap';

const ContactContent = () => {
	return (
		<div className='page-content'>
			{/* Info Section */}
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
									className='text-decoration-none text-black'>
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

			{/* Contact Form Section */}
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

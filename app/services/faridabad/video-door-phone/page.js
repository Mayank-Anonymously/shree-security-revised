import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Video Door Phone in Faridabad | Smart Door Intercom System',
	description:
		'Install a video door phone in Faridabad for secure entry management and remote visitor communication. Same-day consultation available.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/faridabad/video-door-phone',
	},
	openGraph: {
		title: 'Video Door Phone in Faridabad',
		description:
			'Secure your home or apartment with smart video door phone systems in Faridabad.',
		url: 'https://www.shreesecuritycamera.com/services/faridabad/video-door-phone',
	},
};

export default function FaridabadVideoDoorPhonePage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Faridabad Entry Security
								</p>
								<h1 className='mb-3'>Video Door Phone in Faridabad</h1>
								<p className='lead text-muted'>
									Enhance your home and office entry system with modern video
									door phones, remote visitor viewing, and secure communication
									for your property.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Free consultation
									</Link>
									<Link
										href='/services/faridabad'
										className='btn btn-outline-primary text-decoration-none'>
										See Faridabad services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Benefits of video door phones</h2>
								<ul>
									<li>See and speak to visitors before opening the door</li>
									<li>Reduce unwanted entry and unauthorized access</li>
									<li>Ideal for homes, apartments, and offices</li>
									<li>Works well with other security systems</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Book installation</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Same-day assessment and pricing available.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Request call
									</Link>
								</aside>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Screen>
	);
}

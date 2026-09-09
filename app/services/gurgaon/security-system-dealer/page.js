import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Security System Dealer in Gurgaon | CCTV & Access Control',
	description:
		'Looking for a security system dealer in Gurgaon? We supply and install CCTV, burglar alarms, access control, biometric readers, and smart security systems.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/gurgaon/security-system-dealer',
	},
	openGraph: {
		title: 'Security System Dealer in Gurgaon',
		description:
			'Trusted security system dealer in Gurgaon for CCTV, fire alarm, access control, and smart surveillance solutions.',
		url: 'https://www.shreesecuritycamera.com/services/gurgaon/security-system-dealer',
	},
};

export default function GurgaonDealerPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Gurgaon Security Dealer
								</p>
								<h1 className='mb-3'>Security System Dealer in Gurgaon</h1>
								<p className='lead text-muted'>
									We are your local security system dealer in Gurgaon, offering
									smart, reliable, and scalable security solutions for homes,
									offices, retail stores, and commercial projects.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Get dealer quote
									</Link>
									<Link
										href='/services/gurgaon'
										className='btn btn-outline-primary text-decoration-none'>
										Explore Gurgaon services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>What we supply</h2>
								<ul>
									<li>CCTV cameras and DVR/NVR systems</li>
									<li>Biometric and access-control systems</li>
									<li>Security alarm and fire alarm solutions</li>
									<li>Video door phones and intercoms</li>
									<li>Installation, support, and annual maintenance</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Talk to us</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Discuss your project requirement with our team.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Request a call
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

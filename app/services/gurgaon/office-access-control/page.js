import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Office Access Control in Gurgaon | Biometric & Smart Entry',
	description:
		'Office access control in Gurgaon for workplaces, startups, and commercial buildings. Get biometric, RFID, and smart entry systems installed by experts.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/gurgaon/office-access-control',
	},
	openGraph: {
		title: 'Office Access Control in Gurgaon',
		description:
			'Modern office access control and biometric security systems in Gurgaon for controlled employee entry.',
		url: 'https://www.shreesecuritycamera.com/services/gurgaon/office-access-control',
	},
};

export default function GurgaonOfficeAccessControlPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Gurgaon Office Security
								</p>
								<h1 className='mb-3'>Office Access Control in Gurgaon</h1>
								<p className='lead text-muted'>
									Improve office security and manage visitor access with
									biometric readers, RFID-based door access, and centralized
									entry systems designed for Gurgaon businesses.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Get office security quote
									</Link>
									<Link
										href='/services/gurgaon'
										className='btn btn-outline-primary text-decoration-none'>
										Browse Gurgaon services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Access systems that fit business needs</h2>
								<ul>
									<li>Biometric attendance and lock system</li>
									<li>RFID and smart card entry</li>
									<li>Visitor management and security alerts</li>
									<li>Integration with CCTV and alarm systems</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Book a consultation</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Let us recommend the right security setup for your office
										layout.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Talk to us
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

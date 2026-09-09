import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Commercial CCTV in Noida | Office, Retail & Business Security',
	description:
		'Commercial CCTV in Noida for offices, retail stores, schools, warehouses, and businesses. Get professional installation and security monitoring for your property.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/noida/commercial-cctv',
	},
	openGraph: {
		title: 'Commercial CCTV in Noida',
		description:
			'Secure your office, shop, or commercial space with professional CCTV installation in Noida.',
		url: 'https://www.shreesecuritycamera.com/services/noida/commercial-cctv',
	},
};

export default function NoidaCommercialCctvPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Commercial Security Noida
								</p>
								<h1 className='mb-3'>Commercial CCTV in Noida</h1>
								<p className='lead text-muted'>
									We provide business CCTV systems designed for office spaces,
									shops, factories, and institutional buildings that need
									round-the-clock monitoring and protection.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Discuss business needs
									</Link>
									<Link
										href='/services/noida'
										className='btn btn-outline-primary text-decoration-none'>
										View Noida services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Best for commercial properties</h2>
								<ul>
									<li>Corporate offices and workspaces</li>
									<li>Retail shops and showrooms</li>
									<li>Warehouses and manufacturing units</li>
									<li>Schools, clinics, and public buildings</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Business consultation</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Share your site requirement and get a custom commercial
										security plan.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Get quote
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

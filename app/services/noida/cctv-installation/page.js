import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'CCTV Camera Installation in Noida | Shree Security Camera',
	description:
		'Professional CCTV camera installation in Noida for homes, offices, shops, apartment complexes, and commercial properties. Call for a free quote today.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/noida/cctv-installation',
	},
	openGraph: {
		title: 'CCTV Camera Installation in Noida',
		description:
			'Secure your property with professional CCTV systems in Noida for home, business, and commercial needs.',
		url: 'https://www.shreesecuritycamera.com/services/noida/cctv-installation',
	},
};

export default function NoidaCctvPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Noida CCTV Installation
								</p>
								<h1 className='mb-3'>CCTV Camera Installation in Noida</h1>
								<p className='lead text-muted'>
									Install high-quality CCTV systems for your home, office,
									apartment, shop, factory, or commercial property in Noida. We
									provide professional camera setup, remote monitoring,
									maintenance, and quick support.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Get Free Quote
									</Link>
									<Link
										href='/services/noida'
										className='btn btn-outline-primary text-decoration-none'>
										See all Noida services
									</Link>
								</div>
							</div>
						</div>

						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2 className='mb-3'>
									Why homeowners and businesses choose us
								</h2>
								<ul className='list-unstyled'>
									<li className='mb-2'>
										• HD and 4K CCTV solutions for all property sizes
									</li>
									<li className='mb-2'>
										• Outdoor and indoor camera installation by trained experts
									</li>
									<li className='mb-2'>
										• Remote access and mobile monitoring support
									</li>
									<li className='mb-2'>
										• Maintenance, repair, and support plans
									</li>
									<li className='mb-2'>
										• Affordable packages with fast installation
									</li>
								</ul>

								<h3 className='mt-4 mb-3'>Best for:</h3>
								<ul>
									<li>Homes and apartments</li>
									<li>Retail shops and showrooms</li>
									<li>Offices and warehouses</li>
									<li>Schools and institutions</li>
									<li>Hotels, banks, and commercial buildings</li>
								</ul>
							</div>

							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Fast quote</h3>
									<p className='text-muted mb-2'>
										Same-day site visit available.
									</p>
									<p className='fw-bold mb-1'>+91 9015704448</p>
									<p className='mb-3'>support@shreesecuritycamera.com</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Request consultation
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

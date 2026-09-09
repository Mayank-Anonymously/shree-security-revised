import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'CCTV Installation in Gurgaon | Security Camera System Installer',
	description:
		'Get professional CCTV installation in Gurgaon for offices, shops, apartments, warehouses, and commercial spaces. Safe, secure, and affordable installation packages.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/gurgaon/cctv-installation',
	},
	openGraph: {
		title: 'CCTV Installation in Gurgaon',
		description:
			'Trusted CCTV camera installation services in Gurgaon for homes, offices, and business properties.',
		url: 'https://www.shreesecuritycamera.com/services/gurgaon/cctv-installation',
	},
};

export default function GurgaonCctvPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Gurgaon CCTV Services
								</p>
								<h1 className='mb-3'>CCTV Installation in Gurgaon</h1>
								<p className='lead text-muted'>
									Protect your property with smart CCTV systems installed by a
									experienced team in Gurgaon. We design systems around your
									space, security levels, and budget.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Get quote
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
								<h2>Popular CCTV solutions in Gurgaon</h2>
								<ul>
									<li>Apartment and society CCTV systems</li>
									<li>Office and corporate surveillance</li>
									<li>Retail shop and showroom monitoring</li>
									<li>Warehouses and industrial perimeter protection</li>
									<li>Remote mobile access and recording</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Book a visit</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Free consultation for CCTV and access control projects.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Talk to our team
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

import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Home Security Installation in Faridabad | CCTV & Smart Protection',
	description:
		'Get home security installation in Faridabad with CCTV, video door phones, alarm systems, and smart access solutions. Protect your family and property today.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/faridabad/home-security-installation',
	},
	openGraph: {
		title: 'Home Security Installation in Faridabad',
		description:
			'Reliable home security installation services in Faridabad for CCTV, alarms, and smart access control.',
		url: 'https://www.shreesecuritycamera.com/services/faridabad/home-security-installation',
	},
};

export default function FaridabadHomeSecurityPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Faridabad Home Security
								</p>
								<h1 className='mb-3'>
									Home Security Installation in Faridabad
								</h1>
								<p className='lead text-muted'>
									From CCTV cameras to smart door access and alarms, we install
									dependable home security systems in Faridabad for safety,
									convenience, and peace of mind.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Get security quote
									</Link>
									<Link
										href='/services/faridabad'
										className='btn btn-outline-primary text-decoration-none'>
										View all services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Home security systems we install</h2>
								<ul>
									<li>Indoor and outdoor CCTV cameras</li>
									<li>Video door phones for front entry</li>
									<li>Burglar alarm and sensors</li>
									<li>Smart access control for gates and doors</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Free consultation</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Book a site visit and get a custom home security plan.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Schedule visit
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

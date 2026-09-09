import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'CCTV Camera Installation in Faridabad | Security Systems',
	description:
		'Professional CCTV camera installation in Faridabad for residences, offices, schools, commercial properties, and industrial sites. Get a fast quote today.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/faridabad/cctv-installation',
	},
	openGraph: {
		title: 'CCTV Camera Installation in Faridabad',
		description:
			'Need CCTV installation in Faridabad? We install smart security systems for homes and business properties.',
		url: 'https://www.shreesecuritycamera.com/services/faridabad/cctv-installation',
	},
};

export default function FaridabadCctvPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Faridabad CCTV Services
								</p>
								<h1 className='mb-3'>CCTV Installation in Faridabad</h1>
								<p className='lead text-muted'>
									We install durable and high-performance CCTV systems to secure
									homes, businesses, and institutions across Faridabad with
									trusted local support.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Request quote
									</Link>
									<Link
										href='/services/faridabad'
										className='btn btn-outline-primary text-decoration-none'>
										View Faridabad services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4 mt-4'>
							<div className='col-lg-8'>
								<h2>Our Faridabad CCTV packages include</h2>
								<ul>
									<li>Camera site survey and design</li>
									<li>Wired and wireless surveillance setup</li>
									<li>Remote mobile access and cloud recording</li>
									<li>Maintenance, repair, and upgrades</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Need it fast?</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Talk to our team for a same-day security consultation.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Get consultation
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

import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'CCTV Repair in Noida | Camera Maintenance & Service',
	description:
		'Need CCTV repair in Noida? We fix camera faults, power issues, recording problems, and faulty wiring for homes and businesses. Fast service and support.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/services/noida/cctv-repair',
	},
	openGraph: {
		title: 'CCTV Repair in Noida',
		description:
			'Professional CCTV repair and camera maintenance in Noida for homes, offices, shops, and commercial properties.',
		url: 'https://www.shreesecuritycamera.com/services/noida/cctv-repair',
	},
};

export default function NoidaCctvRepairPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									CCTV Repair Noida
								</p>
								<h1 className='mb-3'>CCTV Repair & Maintenance in Noida</h1>
								<p className='lead text-muted'>
									If your surveillance system is not recording, showing poor
									image quality, or failing overnight, our CCTV experts in Noida
									can diagnose and repair it quickly.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Book repair service
									</Link>
									<Link
										href='/services/noida'
										className='btn btn-outline-primary text-decoration-none'>
										Back to Noida services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Common CCTV issues we fix</h2>
								<ul>
									<li>Camera not powering on</li>
									<li>Blurry or low-quality video</li>
									<li>Faulty DVR/NVR recording</li>
									<li>Network and connectivity problems</li>
									<li>Loose wiring and signal loss</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Need urgent help?</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Get a same-day camera diagnosis and repair quote.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Request service
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

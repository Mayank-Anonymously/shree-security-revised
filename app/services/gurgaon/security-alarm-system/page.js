import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Security Alarm System in Gurgaon | Burglar Alarm Installation',
	description:
		'Install a security alarm system in Gurgaon for homes and businesses. Burglar alarm, fire alarm, and smart intrusion protection for offices, shops, and residential properties.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/gurgaon/security-alarm-system',
	},
	openGraph: {
		title: 'Security Alarm System in Gurgaon',
		description:
			'Affordable and reliable burglar alarm and fire alarm systems in Gurgaon for property protection.',
		url: 'https://www.shreesecuritycamera.com/services/gurgaon/security-alarm-system',
	},
};

export default function GurgaonAlarmPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Gurgaon Alarm Systems
								</p>
								<h1 className='mb-3'>Security Alarm System in Gurgaon</h1>
								<p className='lead text-muted'>
									Protect your property with burglar alarms, fire alarms, and
									smart security alerts for offices, residences, and commercial
									spaces in Gurgaon.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Get alarm quote
									</Link>
									<Link
										href='/services/gurgaon'
										className='btn btn-outline-primary text-decoration-none'>
										See all Gurgaon services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Alarm systems for all property types</h2>
								<ul>
									<li>Home security alarm systems</li>
									<li>Office and warehouse intrusion protection</li>
									<li>Fire detection and emergency notification</li>
									<li>Integration with CCTV and access control</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Protect your property</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Book a quick assessment for your alarm system requirements.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Schedule call
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

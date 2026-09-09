import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'School Security System in Faridabad | CCTV & Access Control',
	description:
		'School security system in Faridabad for campuses, classrooms, and staff entry points. CCTV, access control, and smart monitoring solutions for safer schools.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/faridabad/school-security-system',
	},
	openGraph: {
		title: 'School Security System in Faridabad',
		description:
			'Secure your school campus with CCTV, access control, and modern surveillance systems in Faridabad.',
		url: 'https://www.shreesecuritycamera.com/services/faridabad/school-security-system',
	},
};

export default function FaridabadSchoolSecurityPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									School Security Faridabad
								</p>
								<h1 className='mb-3'>School Security System in Faridabad</h1>
								<p className='lead text-muted'>
									Protect staff, students, and campus property with a reliable
									school security system featuring CCTV, controlled access, and
									smart monitoring for entry and exit points.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Request school security consultation
									</Link>
									<Link
										href='/services/faridabad'
										className='btn btn-outline-primary text-decoration-none'>
										View Faridabad services
									</Link>
								</div>
							</div>
						</div>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<h2>Security features for schools</h2>
								<ul>
									<li>Campus surveillance and CCTV coverage</li>
									<li>Biometric or smart access control</li>
									<li>Visitor management and monitoring</li>
									<li>Emergency alarm and alert systems</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Need a school plan?</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Our team can design a security setup for your campus and
										staff entry points.
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

import Link from 'next/link';
import Screen from '../../../../components/common/Screen';

export const metadata = {
	title: 'Biometric Access Control in Noida | Fingerprint & Door Security',
	description:
		'Biometric access control in Noida for offices, institutions, and commercial spaces. Get fingerprint, face, and smart door access solutions with expert installation.',
	alternates: {
		canonical:
			'https://www.shreesecuritycamera.com/services/noida/biometric-access-control',
	},
	openGraph: {
		title: 'Biometric Access Control in Noida',
		description:
			'Install biometric access control and door security systems in Noida for safer entry management.',
		url: 'https://www.shreesecuritycamera.com/services/noida/biometric-access-control',
	},
};

export default function NoidaBiometricPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Biometric Security in Noida
								</p>
								<h1 className='mb-3'>Biometric Access Control in Noida</h1>
								<p className='lead text-muted'>
									Secure your office, school, or facility with biometric access
									control, fingerprint readers, and smart door security systems
									tailored for Noida businesses.
								</p>
								<div className='d-flex justify-content-center gap-2 flex-wrap'>
									<Link
										href='/contact-us'
										className='btn btn-primary text-decoration-none'>
										Book consultation
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
								<h2>Why it matters</h2>
								<ul>
									<li>Prevent unauthorized access and visitor misuse</li>
									<li>Track attendance and employee movement</li>
									<li>Improve safety for offices, schools, and factories</li>
									<li>Integrate with CCTV and alarm systems</li>
								</ul>
							</div>
							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h3 className='h4 mb-3'>Need a quote?</h3>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='text-muted mb-3'>
										Talk with our security specialists about the right access
										system for your space.
									</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Request free consultation
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

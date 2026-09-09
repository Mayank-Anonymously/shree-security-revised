import Link from 'next/link';
import Screen from '../../components/common/Screen';
import JsonFile from '../../utils/servicesJson/file.json';

export const metadata = {
	title:
		'Security Services in Noida, Gurgaon & Faridabad | Shree Security Camera',
	description:
		'CCTV installation, electronic door locks, biometric access control, video door phones, and alarm systems in Noida, Gurgaon, and Faridabad.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/services',
	},
	openGraph: {
		title: 'Security Camera & Access Control Services in Delhi NCR',
		description:
			'Complete security solutions for homes, offices, schools, banks, and retail spaces in Noida, Gurgaon, and Faridabad.',
		url: 'https://www.shreesecuritycamera.com/services',
	},
};

export default function ServicesPage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row mb-5'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='mb-2 text-uppercase text-primary fw-bold'>
									Security Services
								</p>
								<h1 className='mb-3'>
									Security Solutions for Noida, Gurgaon & Faridabad
								</h1>
								<p className='lead text-muted'>
									We provide end-to-end security systems for residential,
									commercial, institutional, and industrial spaces across Delhi
									NCR. From CCTV installation to biometric access controls and
									smart door entry systems, our solutions are designed for fast
									deployment, strong protection, and long-term reliability.
								</p>
							</div>
						</div>

						<div className='row g-4'>
							{JsonFile.map((service) => (
								<div
									className='col-md-6 col-xl-4'
									key={service.slug}>
									<div className='card h-100 shadow-sm border-0'>
										<div className='card-body p-4'>
											<span className='badge bg-light text-dark mb-3'>
												Delhi NCR
											</span>
											<h2 className='h4 mb-3'>{service.title}</h2>
											<p className='text-muted mb-4'>
												Trusted {service.title.toLowerCase()} services in Noida,
												Gurgaon, and Faridabad for homes, offices, schools, and
												retail properties.
											</p>
											<Link
												href={`/services/${service.slug}`}
												className='btn btn-primary text-decoration-none'>
												View service
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='row mt-5 pt-4'>
							<div className='col-lg-10 mx-auto'>
								<div className='bg-light rounded-4 p-4 p-lg-5'>
									<h2 className='mb-3'>
										Why businesses and homeowners choose us
									</h2>
									<ul className='list-unstyled mb-0'>
										<li className='mb-2'>
											• Fast on-site installation across Noida, Gurgaon, and
											Faridabad
										</li>
										<li className='mb-2'>
											• Customized solutions for homes, offices, schools, banks,
											and malls
										</li>
										<li className='mb-2'>
											• High-quality hardware and reliable after-sales support
										</li>
										<li>
											• SEO-friendly service pages designed for quick indexing
											and better local visibility
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Screen>
	);
}

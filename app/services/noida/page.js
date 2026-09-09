import Link from 'next/link';
import Screen from '../../../components/common/Screen';
import JsonFile from '../../../utils/servicesJson/file.json';

export const metadata = {
	title: 'Security Services in Noida | CCTV, Alarm & Access Control',
	description:
		'Professional CCTV installation, access control, biometric systems, and security alarm solutions in Noida for homes and businesses.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/services/noida',
	},
	openGraph: {
		title: 'Security Services in Noida',
		description:
			'Secure homes, offices, schools, and commercial spaces in Noida with trusted CCTV and access control solutions.',
		url: 'https://www.shreesecuritycamera.com/services/noida',
	},
};

const faqs = [
	{
		question: 'What security systems do you install in Noida?',
		answer:
			'We install CCTV surveillance systems, biometric access control, electronic door locks, video door phones, and alarm panels for homes, offices, and commercial properties.',
	},
	{
		question:
			'Do you provide CCTV installation for residential societies in Noida?',
		answer:
			'Yes. We work with apartments, villas, societies, commercial spaces, and office buildings to create tailored camera layouts and access coverage.',
	},
	{
		question:
			'Can you install biometric access control for offices and schools?',
		answer:
			'Yes. We provide biometric attendance systems and access control devices for office staff, schools, factories, and institutional buildings.',
	},
	{
		question: 'How quickly can a project be completed in Noida?',
		answer:
			'The timeline depends on site requirements and system complexity, but standard installations are typically completed within a few days after inspection and approval.',
	},
];

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Shree Security Camera',
		description:
			'Security installation services in Noida including CCTV systems, biometric access control, video door phones, and alarm solutions.',
		telephone: '+91 9015704448',
		email: 'support@shreesecuritycamera.com',
		url: 'https://www.shreesecuritycamera.com',
		areaServed: ['Noida', 'Delhi NCR'],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Noida',
			addressRegion: 'Uttar Pradesh',
			addressCountry: 'IN',
		},
		priceRange: '$$',
		makesOffer: [
			{
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: 'CCTV Installation' },
			},
			{
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: 'Biometric Access Control' },
			},
			{
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: 'Security Alarm System' },
			},
		],
	},
	{
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	},
];

export default function NoidaServicePage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Noida Security Services
								</p>
								<h1 className='mb-3'>
									CCTV, Alarm & Access Control Solutions in Noida
								</h1>
								<p className='lead text-muted'>
									We provide reliable security solutions for homes, offices,
									societies, schools, banks, and retail spaces in Noida. Our
									team helps secure property with modern systems, high-quality
									hardware, and quick support for daily protection needs.
								</p>
							</div>
						</div>

						<div className='row g-4 mt-2'>
							{JsonFile.map((service) => (
								<div
									className='col-md-6 col-lg-4'
									key={service.slug}>
									<div className='card h-100 shadow-sm border-0'>
										<div className='card-body p-4'>
											<h2 className='h5 mb-3'>{service.title}</h2>
											<p className='text-muted mb-3'>
												Installation and support across Noida.
											</p>
											<Link
												href={`/services/${service.slug}`}
												className='btn btn-primary text-decoration-none'>
												Learn more
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='row mt-5'>
							<div className='col-lg-12'>
								<div className='bg-light rounded-4 p-4 p-lg-5'>
									<h2 className='mb-3'>
										Why Noida businesses and families upgrade their security
									</h2>
									<p className='text-muted'>
										Noida is a growing urban centre with high footfall, busy
										commercial areas, and a large number of residential
										communities. For both homes and businesses, a dependable
										security setup is essential to reduce risk, protect assets,
										and increase confidence in day-to-day operations.
									</p>
									<p className='text-muted mb-0'>
										Our installations support safer entry points, stronger
										perimeter monitoring, and easier attendance or access
										management for teams, residents, and visitors.
									</p>
								</div>
							</div>
						</div>

						<div className='row mt-5'>
							<div className='col-lg-12'>
								<h2 className='mb-4'>Popular systems for Noida</h2>
								<div className='row g-4'>
									{[
										'CCTV installation for homes, shops, offices, and commercial complexes',
										'Biometric access control and attendance systems for offices and institutions',
										'Electronic door locks for residential and office entry points',
										'Video door phones and alarm systems for better gate and visitor management',
									].map((item) => (
										<div
											className='col-md-6 col-lg-3'
											key={item}>
											<div className='card h-100 border-0 shadow-sm'>
												<div className='card-body p-4'>
													<p className='mb-0 text-muted'>{item}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className='row mt-5'>
							<div className='col-lg-10 mx-auto'>
								<div className='bg-white border rounded-4 p-4 shadow-sm'>
									<h2 className='mb-4'>Frequently asked questions</h2>
									<div
										className='accordion'
										id='noida-faq'>
										{faqs.map((faq, index) => (
											<div
												className='accordion-item'
												key={faq.question}>
												<h3
													className='accordion-header'
													id={`faq-heading-${index}`}>
													<button
														className='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target={`#faq-${index}`}
														aria-expanded='false'
														aria-controls={`faq-${index}`}>
														{faq.question}
													</button>
												</h3>
												<div
													id={`faq-${index}`}
													className='accordion-collapse collapse'
													aria-labelledby={`faq-heading-${index}`}
													data-bs-parent='#noida-faq'>
													<div className='accordion-body text-muted'>
														{faq.answer}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
			</div>
		</Screen>
	);
}

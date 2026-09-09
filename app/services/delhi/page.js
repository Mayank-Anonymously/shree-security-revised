import Link from 'next/link';
import Screen from '../../../components/common/Screen';
import JsonFile from '../../../utils/servicesJson/file.json';

export const metadata = {
	title: 'Security Services in Delhi | CCTV, Alarm & Access Control',
	description:
		'Professional CCTV installation, access control, biometric systems, and security alarm solutions in Delhi for homes, offices, and commercial spaces.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/services/delhi',
	},
	openGraph: {
		title: 'Security Services in Delhi',
		description:
			'Secure homes, offices, shops, schools, and commercial spaces in Delhi with CCTV and access control systems.',
		url: 'https://www.shreesecuritycamera.com/services/delhi',
	},
};

const faqs = [
	{
		question: 'What security systems do you install in Delhi?',
		answer:
			'We install CCTV surveillance systems, biometric access control, electronic door locks, video door phones, and alarm panels for homes, offices, shops, schools, and commercial properties.',
	},
	{
		question:
			'Do you provide CCTV installation for homes and apartments in Delhi?',
		answer:
			'Yes. We work with apartments, villas, independent homes, societies, and small businesses to design camera layouts that suit the property and security needs.',
	},
	{
		question:
			'Can you install biometric access control for offices and schools in Delhi?',
		answer:
			'Yes. We provide biometric attendance systems and access control solutions for offices, schools, institutions, clinics, and commercial buildings.',
	},
	{
		question: 'How quickly can a project be completed in Delhi?',
		answer:
			'The timeline depends on project size and complexity, but standard CCTV and access control installations are usually completed quickly after the site survey and approval.',
	},
];

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Shree Security Camera',
		description:
			'Security installation services in Delhi including CCTV systems, biometric access control, video door phones, and alarm solutions.',
		telephone: '+91 9015704448',
		email: 'support@shreesecuritycamera.com',
		url: 'https://www.shreesecuritycamera.com',
		areaServed: ['Delhi', 'Delhi NCR'],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Delhi',
			addressRegion: 'Delhi',
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

export default function DelhiServicePage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Delhi Security Services
								</p>
								<h1 className='mb-3'>
									CCTV, Alarm & Access Control Solutions in Delhi
								</h1>
								<p className='lead text-muted'>
									We provide dependable security systems for homes, offices,
									commercial buildings, schools, shops, and residential
									societies across Delhi. Our team helps secure every property
									with modern systems and quick, professional installation
									support.
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
												Installation and support across Delhi.
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
										Why Delhi homes and businesses upgrade their security
									</h2>
									<p className='text-muted'>
										Delhi has a mix of residential, commercial, retail, and
										civic properties, which makes reliable security monitoring
										essential. From apartment entry points to office corridors
										and commercial premises, a secure and professionally
										installed system helps reduce risk and improve daily peace
										of mind.
									</p>
									<p className='text-muted mb-0'>
										Our solutions are designed to support easy access control,
										faster incident monitoring, and fewer security gaps across
										your property.
									</p>
								</div>
							</div>
						</div>

						<div className='row mt-5'>
							<div className='col-lg-12'>
								<h2 className='mb-4'>Popular systems for Delhi</h2>
								<div className='row g-4'>
									{[
										'CCTV installation for homes, shops, offices, and commercial spaces',
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
										id='delhi-faq'>
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
													data-bs-parent='#delhi-faq'>
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

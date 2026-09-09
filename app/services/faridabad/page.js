import Link from 'next/link';
import Screen from '../../../components/common/Screen';
import JsonFile from '../../../utils/servicesJson/file.json';

export const metadata = {
	title: 'Security Services in Faridabad | CCTV & Access Control',
	description:
		'Professional CCTV installation, door access systems, and security alarms in Faridabad for homes, commercial spaces, and industrial properties.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/services/faridabad',
	},
	openGraph: {
		title: 'Security Services in Faridabad',
		description:
			'Reliable CCTV and access control systems for homes, offices, and industrial spaces across Faridabad.',
		url: 'https://www.shreesecuritycamera.com/services/faridabad',
	},
};

const faqs = [
	{
		question: 'Do you install CCTV systems in Faridabad homes and shops?',
		answer:
			'Yes. We design and install CCTV systems for homes, shops, godowns, offices, and commercial buildings throughout Faridabad and nearby sectors.',
	},
	{
		question:
			'Can you install biometric access control and attendance systems in Faridabad?',
		answer:
			'Yes. We install biometric machines, RFID access devices, and smart entry systems for offices, schools, factories, and managed communities.',
	},
	{
		question:
			'Are video door phones useful for residential societies in Faridabad?',
		answer:
			'Yes. Video door phones help you verify visitors before opening the door, improve entry security, and are widely used in villas, apartments, and gate houses.',
	},
	{
		question: 'How do I get a site quote for security systems in Faridabad?',
		answer:
			'You can contact our team with your property details and expected coverage area. We provide site inspection guidance and a custom security recommendation.',
	},
];

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Shree Security Camera',
		description:
			'Security installation services in Faridabad, including CCTV systems, video door phones, biometric access control, and alarm systems.',
		telephone: '+91 9015704448',
		email: 'support@shreesecuritycamera.com',
		url: 'https://www.shreesecuritycamera.com',
		areaServed: ['Faridabad', 'Delhi NCR'],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Faridabad',
			addressRegion: 'Haryana',
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
				itemOffered: { '@type': 'Service', name: 'Video Door Phone' },
			},
			{
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: 'Biometric Access Control' },
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

export default function FaridabadServicePage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Faridabad Security Services
								</p>
								<h1 className='mb-3'>
									Trusted Security Installations in Faridabad
								</h1>
								<p className='lead text-muted'>
									We help homes, businesses, and institutions in Faridabad
									protect people, property, and operations with dependable
									surveillance, access control, and alarm systems. Our solutions
									are designed for modern residential and commercial demands
									across the city.
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
												Installation and support across Faridabad.
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
										Security solutions for Faridabad properties
									</h2>
									<p className='text-muted'>
										Faridabad continues to grow as a residential and industrial
										hub, which means property owners need dependable security
										solutions that keep pace with fast-moving urban development.
										Our team helps you secure entry points, monitor open spaces,
										and protect vulnerable areas with systems designed for both
										homes and commercial setups.
									</p>
									<p className='text-muted mb-0'>
										We install systems that improve visibility, deter threats,
										and make it easier to manage people, vehicles, and access
										on-site.
									</p>
								</div>
							</div>
						</div>

						<div className='row mt-5'>
							<div className='col-lg-12'>
								<h2 className='mb-4'>Types of systems we install</h2>
								<div className='row g-4'>
									{[
										'CCTV surveillance for homes, offices, factories, and commercial complexes',
										'Video door phones for apartments, bungalows, and gated residential zones',
										'Biometric and access control systems for offices, schools, and warehouses',
										'Security alarms and intrusion protection for vulnerable entry points and assets',
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
										id='faridabad-faq'>
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
													data-bs-parent='#faridabad-faq'>
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
			</div>{' '}
		</Screen>
	);
}

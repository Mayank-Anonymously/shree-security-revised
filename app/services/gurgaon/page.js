import Link from 'next/link';
import Screen from '../../../components/common/Screen';
import JsonFile from '../../../utils/servicesJson/file.json';

export const metadata = {
	title: 'Security Services in Gurgaon | CCTV Installation & Access Control',
	description:
		'Trusted CCTV installation, biometric systems, video door phones, and security alarms in Gurgaon for residential and commercial properties.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/services/gurgaon',
	},
	openGraph: {
		title: 'Security Services in Gurgaon',
		description:
			'Secure offices, homes, and commercial spaces in Gurgaon with smart surveillance and access control systems.',
		url: 'https://www.shreesecuritycamera.com/services/gurgaon',
	},
};

const faqs = [
	{
		question:
			'Do you provide CCTV installation in Gurgaon for apartments and villas?',
		answer:
			'Yes. We install CCTV systems for apartments, villas, offices, retail spaces, factories, and commercial buildings across Gurgaon, including sectors and residential societies.',
	},
	{
		question:
			'Can you install biometric and access control systems in Gurgaon offices?',
		answer:
			'Absolutely. We provide biometric attendance systems, RFID access control, and secure entry management solutions for office campuses, warehouses, and commercial properties.',
	},
	{
		question:
			'Do you offer alarm systems and fire safety integration in Gurgaon?',
		answer:
			'Yes. We install security alarm panels, intrusion detection systems, and can support integration with fire alarms and safety monitoring for commercial and residential properties.',
	},
	{
		question: 'How quickly can a security system be installed in Gurgaon?',
		answer:
			'Most standard installations are completed within a few days after site inspection and approval, depending on property size, wiring, and system requirements.',
	},
];

const schema = [
	{
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Shree Security Camera',
		description:
			'Security services in Gurgaon including CCTV camera installation, access control, biometric systems, video door phones, and alarm systems.',
		telephone: '+91 9015704448',
		email: 'support@shreesecuritycamera.com',
		url: 'https://www.shreesecuritycamera.com',
		areaServed: ['Gurgaon', 'Delhi NCR', 'Noida', 'Faridabad'],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Gurgaon',
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

export default function GurgaonServicePage() {
	return (
		<Screen>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 mx-auto text-center'>
								<p className='text-uppercase text-primary fw-bold mb-2'>
									Gurgaon Security Services
								</p>
								<h1 className='mb-3'>Advanced Security Systems in Gurgaon</h1>
								<p className='lead text-muted'>
									We provide modern security solutions in Gurgaon for apartment
									complexes, offices, retail stores, factories, schools, and
									commercial facilities that need dependable CCTV, access
									control, and alarm protection.
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
												Professional installation and support across Gurgaon.
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
										Why Gurgaon properties choose our security systems
									</h2>
									<p className='text-muted'>
										Gurgaon is a fast-moving business and residential hub, and
										every property needs reliable protection. From luxury
										apartments and villas to office spaces, schools, and retail
										stores, we provide security systems that help you protect
										assets, improve visibility, and reduce operational risks.
										Our team works with modern hardware, smart analytics, and
										professional installation standards to deliver long-term
										peace of mind.
									</p>
									<p className='text-muted mb-0'>
										Whether you need a secure entrance system, CCTV coverage
										around the boundary, or access control for employee
										movement, we design solutions based on your site layout and
										business requirements.
									</p>
								</div>
							</div>
						</div>

						<div className='row mt-5'>
							<div className='col-lg-12'>
								<h2 className='mb-4'>
									Security solutions we install in Gurgaon
								</h2>
								<div className='row g-4'>
									{[
										'CCTV camera installation for homes, offices, societies, and retail spaces',
										'Biometric attendance and access control systems for staff and visitor management',
										'Video door phones for gated communities, office entrances, and residential villas',
										'Security alarm panels, intrusion detection, and commercial protection systems',
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
										id='gurgaon-faq'>
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
													data-bs-parent='#gurgaon-faq'>
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

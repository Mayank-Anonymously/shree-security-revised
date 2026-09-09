import Link from 'next/link';
import { notFound } from 'next/navigation';
import Screen from '../../../components/common/Screen';
import JsonFile from '../../../utils/servicesJson/file.json';

const serviceCities = ['Noida', 'Gurgaon', 'Faridabad'];

export async function generateStaticParams() {
	return JsonFile.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const service = JsonFile.find((item) => item.slug === slug);

	if (!service) {
		return {};
	}

	const title = `${service.title} in Noida, Gurgaon & Faridabad | Shree Security Camera`;
	const description = `Get ${service.title.toLowerCase()} solutions in Noida, Gurgaon, and Faridabad. Fast installation, quality support, and reliable security systems for homes and businesses.`;

	return {
		title,
		description,
		keywords: [
			`${service.title} in Noida`,
			`${service.title} in Gurgaon`,
			`${service.title} in Faridabad`,
			'security camera services Delhi NCR',
			'Shree Security Camera',
		],
		alternates: {
			canonical: `https://www.shreesecuritycamera.com/services/${service.slug}`,
		},
		openGraph: {
			title,
			description,
			url: `https://www.shreesecuritycamera.com/services/${service.slug}`,
			siteName: 'Shree Security Camera',
		},
	};
}

export default async function ServiceDetailPage({ params }) {
	const { slug } = await params;
	const service = JsonFile.find((item) => item.slug === slug);

	if (!service) {
		notFound();
	}

	const serviceDescription =
		service.content || '<p>Security solution details available soon.</p>';

	const faqs = [
		{
			question: `What is included in ${service.title.toLowerCase()} installation?`,
			answer: `Our ${service.title.toLowerCase()} service includes site assessment, product recommendation, installation, testing, and basic setup guidance for homes and businesses across Delhi NCR.`,
		},
		{
			question: `Do you serve Noida, Gurgaon, and Faridabad for ${service.title.toLowerCase()}?`,
			answer: `Yes. We provide ${service.title.toLowerCase()} services in Noida, Gurgaon, and Faridabad for residential, commercial, and industrial properties.`,
		},
		{
			question: `How do I get a quote for ${service.title.toLowerCase()}?`,
			answer: `Contact our team with your property size and security needs. We can schedule a site visit or provide a recommendation based on your requirement and location.`,
		},
	];

	const schema = [
		{
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: `${service.title} in Noida, Gurgaon & Faridabad`,
			serviceType: service.title,
			provider: {
				'@type': 'Organization',
				name: 'Shree Security Camera',
				url: 'https://www.shreesecuritycamera.com',
			},
			areaServed: serviceCities,
			description: `Professional ${service.title.toLowerCase()} services for residential and commercial projects in Noida, Gurgaon, and Faridabad.`,
			url: `https://www.shreesecuritycamera.com/services/${service.slug}`,
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

	return (
		<Screen>
			<div className='page-content'>
				<section className='service_details py-5'>
					<div className='container'>
						<div className='row g-4'>
							<div className='col-lg-8'>
								<nav
									aria-label='breadcrumb'
									className='mb-3'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<Link
												href='/'
												className='text-decoration-none'>
												Home
											</Link>
										</li>
										<li className='breadcrumb-item'>
											<Link
												href='/services'
												className='text-decoration-none'>
												Services
											</Link>
										</li>
										<li
											className='breadcrumb-item active'
											aria-current='page'>
											{service.title}
										</li>
									</ol>
								</nav>

								<h1 className='mb-3'>
									{service.title} in Noida, Gurgaon & Faridabad
								</h1>
								<p className='lead text-muted'>
									Protect your property with professional{' '}
									{service.title.toLowerCase()} solutions designed for homes,
									offices, schools, banks, retail spaces, and commercial
									properties across Delhi NCR.
								</p>

								<div
									className='service-content mt-4'
									dangerouslySetInnerHTML={{ __html: serviceDescription }}
								/>

								<div className='mt-5 p-4 rounded-4 bg-light'>
									<h2 className='h4 mb-3'>Serving these key areas</h2>
									<div className='d-flex flex-wrap gap-2'>
										{serviceCities.map((city) => (
											<Link
												key={city}
												href={`/services/${city.toLowerCase()}`}
												className='btn btn-outline-primary rounded-pill text-decoration-none'>
												{city}
											</Link>
										))}
									</div>
								</div>

								<div className='mt-5'>
									<h2 className='mb-3'>
										Why choose our {service.title.toLowerCase()} service?
									</h2>
									<p className='text-muted'>
										We help property owners install practical and reliable
										security systems that fit their budget, site conditions, and
										operational requirements. Our approach focuses on accurate
										placement, reliable equipment, and clean installation
										standards so your property remains protected without
										unnecessary complexity.
									</p>
									<p className='text-muted mb-0'>
										Whether you need a single-entry security upgrade or a full
										business-wide monitoring setup, our team ensures your
										security investment is tailored to your property and
										long-term goals.
									</p>
								</div>

								<div className='mt-5'>
									<h2 className='mb-3'>Frequently asked questions</h2>
									<div
										className='accordion'
										id={`faq-${service.slug}`}>
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
														data-bs-target={`#faq-${service.slug}-${index}`}
														aria-expanded='false'
														aria-controls={`faq-${service.slug}-${index}`}>
														{faq.question}
													</button>
												</h3>
												<div
													id={`faq-${service.slug}-${index}`}
													className='accordion-collapse collapse'
													aria-labelledby={`faq-heading-${index}`}
													data-bs-parent={`#faq-${service.slug}`}>
													<div className='accordion-body text-muted'>
														{faq.answer}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className='col-lg-4'>
								<aside className='bg-light rounded-4 p-4 shadow-sm'>
									<h2 className='h4 mb-3'>Need a fast quote?</h2>
									<p className='text-muted mb-3'>
										Call us for a same-day site assessment and customized
										security plan.
									</p>
									<p className='fw-bold mb-2'>+91 9015704448</p>
									<p className='mb-3'>Support@shreesecuritycamera.com</p>
									<Link
										href='/contact-us'
										className='btn btn-primary w-100 text-decoration-none'>
										Request consultation
									</Link>
								</aside>
							</div>
						</div>
					</div>
				</section>

				<div dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
			</div>
		</Screen>
	);
}

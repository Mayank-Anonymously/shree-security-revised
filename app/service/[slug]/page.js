import Screen from '@/components/common/Screen';
import React from 'react';
import JsonFile from '../../../utils/servicesJson/file.json';

export async function generateMetadata({ params }) {
	const service = JsonFile.find((item) => item.slug === params.slug);
	if (!service) return {};

	return {
		title: `${service.title} | Shree Security Camera`,
		description: `Learn more about our ${service.title} service offering top-class security solutions.`,
		alternates: {
			canonical: `https://www.yourdomain.com/services/${service.slug}`,
		},
		openGraph: {
			title: service.title,
			description: `Explore the details of our ${service.title} services.`,
			images: [service.image],
			url: `https://www.yourdomain.com/services/${service.slug}`,
		},
	};
}

export const getData = async (slug) => {
	const data = JsonFile.find((item) => item.slug === slug);
	return data;
};
const page = async ({ params }) => {
	const { slug } = params;
	const servicefetch = await getData(slug);
	return (
		<Screen>
			<div className='page-content'>
				<section class='service_details'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-3 service-left-col order-2 order-lg-1 sidebar'>
								<aside class='service-sidebar'>
									<aside class='widget post-list'>
										<div class='all-post-list'>
											<ul>
												<li class='post-active'>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Cyber Security Specialist{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Institute CCTV Security{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Banking Sector Outside{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Private Sector Security{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Mall & Super Store Security{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														24/7 Shield Security{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														School & Hospital Security{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Office & Industrial Security{' '}
													</a>
												</li>
												<li>
													<a
														href='service-details.html'
														className='text-decoration-none'>
														{' '}
														Commercial CCTV System{' '}
													</a>
												</li>
											</ul>
										</div>
									</aside>

									<aside class='widget pbmit-service-ad'>
										<div class='textwidget custom-html-widget'>
											<div class='pbmit-service-ads'>
												<div class='pbmit-logo-img'>
													<img
														src='/images/fevicon-white.png'
														alt='white'
													/>
												</div>
												<p class='pbmit-ads-contact'>
													We are No.1 Security <br /> System Company
												</p>
												<h4 class='pbmit-ads-title'>Call Us</h4>
												<h4 class='pbmit-ads-contact'>+91 9015704448</h4>
												<p class='pbmit-ads-des'>
													Same-Day Appointments Available
												</p>
											</div>
										</div>
									</aside>
								</aside>
							</div>
							<div class='col-lg-9 service-right-col order-1'>
								<div class='pbmit-service-feature-image'>
									<img
										src='/images/services/service-single-01.jpg'
										class='img-fluid w-100'
										alt='single'
									/>
								</div>
								<div class='pbmit-entry-content'>
									<div class='pbmit-service_content'>
										<h3 class='mb-3'>{servicefetch.title}</h3>
									</div>
									<div
										dangerouslySetInnerHTML={{ __html: servicefetch.content }}
										className='service'
									/>
									{/* <div class='row'>
										<div class='col-md-6'>
											<div class='pbmit-animation-style1'>
												<div class='pbmit-service-img01'>
													<img
														src='images/services/service-detail-01.jpg'
														class='img-fluid'
														alt='detail'
													/>
												</div>
											</div>
											<div class='service-list-group'>
												<ul class='list-group list-group-borderless'>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															{' '}
															Praesent efficitur quam sit amet
														</span>
													</li>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															Nunc cursus dolor id purus euismod
														</span>
													</li>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															{' '}
															Quisque tincidunt eros ac place viverra
														</span>
													</li>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															{' '}
															Quisque tincidunt eros ac place viverra
														</span>
													</li>
												</ul>
											</div>
										</div>
										<div class='col-md-6'>
											<div class='pbmit-animation-style2'>
												<div class='pbmit-service-img02'>
													<img
														src='images/services/service-detail-02.jpg'
														class='img-fluid'
														alt='service-02'
													/>
												</div>
											</div>
											<div class='service-list-group'>
												<ul class='list-group list-group-borderless'>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															It is a long established that a reader.
														</span>
													</li>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															{' '}
															Various versions have evolved over.
														</span>
													</li>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															You need to be sure there isn't anything.
														</span>
													</li>
													<li class='list-group-item'>
														<span class='pbmit-icon-list-icon'>
															<i
																aria-hidden='true'
																class='fa fa-check'></i>
														</span>
														<span class='pbmit-icon-list-text'>
															Always free from repetition,humour.
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class='service-detail-accordion_box'>
										<h3 class='mb-3'>Frequently Asked Questions​</h3>
										<p>
											Excepteur sint occaecat cupidatat non proident, sunt in
											culpa qui officia deserunt mollit anim id est laborum. Sed
											ut perspiciatis unde omnis iste natus incidunt ut labore
											et dolore magnam aliquam quaerat voluptatem.
										</p>
										<div
											class='accordion'
											id='accordionExample1'>
											<div
												class='accordion-item active'
												id='headingOne1'>
												<h2 class='accordion-header'>
													<button
														class='accordion-button'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#collapseOne1'
														aria-expanded='false'
														aria-controls='collapseOne1'>
														<span class='pbmit-accordion-icon pbmit-accordion-icon-right'>
															<span class='pbmit-accordion-icon-closed'>
																<i class='fa fa-plus'></i>
															</span>
															<span class='pbmit-accordion-icon-opened'>
																<i class='fa fa-minus'></i>
															</span>
														</span>
														<span class='pbmit-accordion-title'>
															What types of security services do you offer?
														</span>
													</button>
												</h2>
												<div
													id='collapseOne1'
													class='accordion-collapse collapse show'
													aria-labelledby='headingOne1'
													data-bs-parent='#accordionExample1'>
													<div class='accordion-body'>
														Quam nulla porttitor massa id neque aliquam Id leo
														in vitae turpis massa sed diam vel quam
														elementum.volutpat maece Iaculis at erat
														pellentesque adipiscing maecen.
													</div>
												</div>
											</div>
											<div class='accordion-item'>
												<h2
													class='accordion-header'
													id='headingTwo1'>
													<button
														class='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#collapseTwo1'
														aria-expanded='false'
														aria-controls='collapseTwo1'>
														<span class='pbmit-accordion-icon pbmit-accordion-icon-right'>
															<span class='pbmit-accordion-icon-closed'>
																<i class='fa fa-plus'></i>
															</span>
															<span class='pbmit-accordion-icon-opened'>
																<i class='fa fa-minus'></i>
															</span>
														</span>
														<span class='pbmit-accordion-title'>
															Dealt dragonfly wombat gosh vulture less scorpion?
														</span>
													</button>
												</h2>
												<div
													id='collapseTwo1'
													class='accordion-collapse collapse'
													aria-labelledby='headingTwo1'
													data-bs-parent='#accordionExample1'>
													<div class='accordion-body'>
														Quam nulla porttitor massa id neque aliquam Id leo
														in vitae turpis massa sed diam vel quam
														elementum.volutpat maece Iaculis at erat
														pellentesque adipiscing maecen.
													</div>
												</div>
											</div>
											<div class='accordion-item'>
												<h2
													class='accordion-header'
													id='headingThree1'>
													<button
														class='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#collapseThree1'
														aria-expanded='false'
														aria-controls='collapseThree1'>
														<span class='pbmit-accordion-icon pbmit-accordion-icon-right'>
															<span class='pbmit-accordion-icon-closed'>
																<i class='fa fa-plus'></i>
															</span>
															<span class='pbmit-accordion-icon-opened'>
																<i class='fa fa-minus'></i>
															</span>
														</span>
														<span class='pbmit-accordion-title'>
															In quaintly wiped some unexpectedly dimly?
														</span>
													</button>
												</h2>
												<div
													id='collapseThree1'
													class='accordion-collapse collapse'
													aria-labelledby='headingThree1'
													data-bs-parent='#accordionExample1'>
													<div class='accordion-body'>
														Quam nulla porttitor massa id neque aliquam Id leo
														in vitae turpis massa sed diam vel quam
														elementum.volutpat maece Iaculis at erat
														pellentesque adipiscing maecen.
													</div>
												</div>
											</div>
											<div class='accordion-item'>
												<h2
													class='accordion-header'
													id='headingFour1'>
													<button
														class='accordion-button collapsed'
														type='button'
														data-bs-toggle='collapse'
														data-bs-target='#collapseFour1'
														aria-expanded='false'
														aria-controls='collapseFour1'>
														<span class='pbmit-accordion-icon pbmit-accordion-icon-right'>
															<span class='pbmit-accordion-icon-closed'>
																<i class='fa fa-plus'></i>
															</span>
															<span class='pbmit-accordion-icon-opened'>
																<i class='fa fa-minus'></i>
															</span>
														</span>
														<span class='pbmit-accordion-title'>
															Cost of sat before and wow so that including due?
														</span>
													</button>
												</h2>
												<div
													id='collapseFour1'
													class='accordion-collapse collapse'
													aria-labelledby='headingFour1'
													data-bs-parent='#accordionExample1'>
													<div class='accordion-body'>
														Quam nulla porttitor massa id neque aliquam Id leo
														in vitae turpis massa sed diam vel quam
														elementum.volutpat maece Iaculis at erat
														pellentesque adipiscing maecen.
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Screen>
	);
};

export default page;

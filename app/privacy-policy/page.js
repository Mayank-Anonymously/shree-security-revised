import Screen from '../../components/common/Screen';
import TitleBar from '../../components/common/TitleBar';

export const metadata = {
	title: 'Privacy Policy | Shree Security Camera',
	description:
		'Privacy Policy for Shree Security Camera. Learn how we collect, use and protect your data when you request CCTV installation and security services in Delhi NCR.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/privacy-policy',
	},
};

export default function PrivacyPolicy() {
	return (
		<Screen>
			<TitleBar
				page='Privacy Policy'
				link='Home'
			/>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-10 mx-auto'>
								<article>
									<h1>Privacy Policy</h1>
									<p className='lead text-muted'>
										Shree Security Camera respects your privacy. This policy
										explains what information we collect, why we collect it, and
										how we use and protect it when you visit our website or
										request our security services in Delhi, Noida, Gurgaon,
										Faridabad and the surrounding areas.
									</p>

									<h2>1. Information we collect</h2>
									<p>
										We collect information you provide directly when you contact
										us (for example, via the contact form, phone, email, or
										chat). This may include name, address, phone number, email
										address, company name, and details about the property where
										services are requested. We also collect technical
										information automatically when you visit our site (IP
										address, browser type, pages visited, referring URL, and
										device information) through standard server logs and
										analytic tools.
									</p>

									<h2>2. How we use your information</h2>
									<p>
										We use personal information to respond to your inquiries,
										provide quotes, schedule site visits, deliver services, and
										for billing and support. Technical and usage data helps us
										improve the website, monitor performance, and understand
										visitor trends so we can provide better content and service
										availability.
									</p>

									<h2>3. Legal bases for processing</h2>
									<p>
										Where applicable, our lawful bases for processing personal
										data include performance of a contract, legitimate interests
										(improving services and preventing fraud), and consent where
										required by law.
									</p>

									<h2>4. Cookies and tracking</h2>
									<p>
										We use cookies and similar technologies for session
										management, analytics, and to improve visitor experience.
										You can control or block cookies through your browser
										settings; however, some site features may not work correctly
										without cookies.
									</p>

									<h2>5. Sharing and disclosure</h2>
									<p>
										We do not sell personal information. We may share data with
										service providers who support our operations (for example
										CRM, email, payment processors) under confidentiality
										obligations. We may also disclose information to comply with
										legal obligations, protect rights and safety, or in
										connection with a business sale or re-organization.
									</p>

									<h2>6. Third-party services and links</h2>
									<p>
										Our website may contain links to third-party sites and
										services (payment gateways, analytics, maps). We are not
										responsible for third-party privacy practices. Please review
										their policies separately.
									</p>

									<h2>7. Data retention and security</h2>
									<p>
										We retain personal information only as long as necessary to
										provide services and to meet legal, tax and accounting
										requirements. We implement reasonable technical and
										administrative measures to safeguard data, but no system is
										completely secure — if you suspect a breach, contact us
										immediately.
									</p>

									<h2>8. Your rights</h2>
									<p>
										Depending on your jurisdiction, you may have rights to
										access, correct, delete, restrict or port your personal data
										and to object to certain processing. To exercise these
										rights, please contact us using the details below.
									</p>

									<h2>9. Children</h2>
									<p>
										Our services are not directed to children. We do not
										knowingly collect personal information from children under
										16. If you believe we have collected data about a child,
										contact us to request deletion.
									</p>

									<h2>10. Changes to this policy</h2>
									<p>
										We may update this policy periodically. We will post updates
										on this page with a revised effective date. For substantial
										changes, we will provide more prominent notice.
									</p>

									<h2>11. Contact</h2>
									<p>
										If you have questions or requests about your privacy, please
										contact us at:
									</p>
									<ul>
										<li>Phone: +91 9015704448</li>
										<li>Email: support@shreesecuritycamera.com</li>
										<li>
											Address: A-146 Top Floor, Veer Savarkar Block, Shakarpur,
											Delhi 110092
										</li>
									</ul>

									<p className='text-muted small'>
										Last updated: September 2026
									</p>
								</article>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Screen>
	);
}

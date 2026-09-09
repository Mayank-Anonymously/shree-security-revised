import Screen from '../../components/common/Screen';
import TitleBar from '../../components/common/TitleBar';

export const metadata = {
	title: 'Terms & Conditions | Shree Security Camera',
	description:
		'Terms and conditions for using the Shree Security Camera website and for requesting security services across Delhi NCR.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/terms-and-conditions',
	},
};

export default function TermsPage() {
	return (
		<Screen>
			<TitleBar
				page='Terms & Conditions'
				link='Home'
			/>
			<div className='page-content'>
				<section className='section-xl'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-10 mx-auto'>
								<article>
									<h1>Terms & Conditions</h1>
									<p className='lead text-muted'>
										These terms and conditions govern your use of the Shree
										Security Camera website and the supply of our security
										services. By accessing the site or requesting services you
										agree to these terms.
									</p>

									<h2>1. Definitions</h2>
									<p>
										"Company", "we" or "us" means Shree Security Camera. "You"
										or "Customer" means the person or organization using the
										website or purchasing services.
									</p>

									<h2>2. Services and quotations</h2>
									<p>
										We provide security system sales, installation and
										maintenance services including CCTV, biometric access
										control, electronic door locks, video door phones and alarm
										systems. All quotations are subject to site survey,
										availability of products and confirmation in writing.
									</p>

									<h2>3. Customer obligations</h2>
									<p>
										You agree to provide accurate contact and site information,
										necessary access to the premises, and co-operate with our
										engineers. Delays caused by customer unavailability may
										affect timelines and charges.
									</p>

									<h2>4. Payments and cancellation</h2>
									<p>
										Payment terms will be provided in the quotation. We may
										require a deposit to secure booking. Cancellation fees may
										apply if appointments are cancelled without reasonable
										notice.
									</p>

									<h2>5. Warranty and liability</h2>
									<p>
										We supply products under their manufacturer warranties. Our
										installation work is covered by a limited workmanship
										warranty as specified in your service agreement. We are not
										liable for indirect, incidental or consequential losses
										beyond the scope of our direct obligations.
									</p>

									<h2>6. Intellectual property</h2>
									<p>
										All content on the website (text, graphics, logos) is owned
										or licensed by Shree Security Camera. You may not reproduce
										our content without written consent.
									</p>

									<h2>7. Privacy</h2>
									<p>
										Our use of personal information is governed by our Privacy
										Policy, available on the site. By using the site you
										acknowledge that you have read and accept the Privacy
										Policy.
									</p>

									<h2>8. Termination</h2>
									<p>
										We may suspend or terminate services if you breach these
										terms or fail to cooperate with site access and payment
										requirements.
									</p>

									<h2>9. Changes to terms</h2>
									<p>
										We may amend these terms. Updated terms will be posted to
										this page with an effective date. Continued use of the
										website or services after changes indicates acceptance.
									</p>

									<h2>10. Governing law</h2>
									<p>
										These terms are governed by the laws of India. Disputes will
										be subject to the jurisdiction of courts in Delhi unless
										otherwise agreed.
									</p>

									<h2>11. Contact</h2>
									<p>
										If you have questions about these terms, contact us at
										support@shreesecuritycamera.com or +91 9015704448.
									</p>

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

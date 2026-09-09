import Screen from '../../components/common/Screen';
import ContactContent from '../../components/Screens/Contact/sections/ContactContent';
import TitleBar from '../../components/common/TitleBar';

export const metadata = {
	title:
		'Contact Shree Security Camera | Security Services in Delhi, Noida, Gurgaon & Faridabad',
	description:
		'Contact Shree Security Camera for CCTV installation, access control, biometric systems, and alarm solutions in Delhi, Noida, Gurgaon, and Faridabad.',
	alternates: {
		canonical: 'https://www.shreesecuritycamera.com/contact-us',
	},
	openGraph: {
		title: 'Contact Shree Security Camera',
		description:
			'Book CCTV installation, biometric access control, and security systems across Delhi and Delhi NCR.',
		url: 'https://www.shreesecuritycamera.com/contact-us',
	},
};

const ContactUs = () => {
	return (
		<Screen>
			<TitleBar
				page='Contact Us'
				link='Home'
			/>
			<ContactContent />
		</Screen>
	);
};

export default ContactUs;

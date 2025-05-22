import Screen from '@/components/common/Screen';
import ContactContent from '@/components/Screens/Contact/sections/ContactContent';
import TitleBar from '@/components/common/TitleBar';

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

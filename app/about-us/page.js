import Screen from '@/components/common/Screen';
import Testimonials from '@/components/common/Testimonials';
import TitleBar from '@/components/common/TitleBar';
import IhboxSlider from '@/components/Screens/AboutUs/sections/AboutInfobox';
import Aboutusbottom from '@/components/Screens/AboutUs/sections/aboutusbottom';
import Howwework from '@/components/Screens/AboutUs/sections/Howwework';

const AboutUs = () => {
	return (
		<Screen>
			<TitleBar
				page='About Us'
				link='Home'
			/>
			<IhboxSlider />
			<Howwework />
			<Aboutusbottom />
			<Testimonials />
		</Screen>
	);
};

export default AboutUs;

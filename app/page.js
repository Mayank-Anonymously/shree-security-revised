import Screen from '../components/common/Screen';
import AboutUs from '../components/Screens/Home/sections/Aboutus';
import ServiceHome from '../components/Screens/Home/sections/ServiceHome';
import SliderComponent from '../components/Screens/Home/sections/Slider';
import Testimonials from '../components/common/Testimonials';
import NumberBanner from '../components/common/NumberBanner';
import Whychooseus from '../components/common/Whychooseus';

export default function Home() {
	return (
		<Screen>
			<SliderComponent />
			<AboutUs />
			<ServiceHome />
			<NumberBanner />
			<Whychooseus />
			<Testimonials />
		</Screen>
	);
}

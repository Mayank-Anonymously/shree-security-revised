import Screen from '@/components/common/Screen';
import AboutUs from '@/components/Screens/Home/sections/Aboutus';
import ServiceHome from '@/components/Screens/Home/sections/ServiceHome';
import SliderComponent from '@/components/Screens/Home/sections/Slider';
import Testimonials from '@/components/Screens/Home/sections/Testimonials';
import Whychooseus from '@/components/Screens/Home/sections/Whychooseus';
export default function Home() {
	return (
		<Screen>
			<SliderComponent />
			<AboutUs />
			<ServiceHome />
			<Whychooseus />
			<Testimonials />	
		</Screen>
	);
}

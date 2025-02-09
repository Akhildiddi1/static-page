import './App.css';
import AddYourOwn from './component/AddYourOwn';
import FeaturesSection from './component/FeaturesSection';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import LoginScreen from './component/LoginScreen';

// import MyNavbar from './component/MyNavbar';
import Navbar from './component/Navbar';
import Testimonial from './component/Testimonial';

function App() {
  return (
    <>
   {/* <MyNavbar/> */}
   <Navbar/>
   <LoginScreen/>
   <FeaturesSection/>
   <AddYourOwn/>
   <Testimonial/>
   <HeroSection/>
   <Footer/>
   </>
  );
}

export default App;

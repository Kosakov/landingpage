import NavigationBar from "./components/navBar/nav";
import Heading from "./components/heading/headingAndImage";
import Content from "./components/content/content"; 
import HeroSection from "./components/heroSection/hero"
import Footer from "./components/footer/footer"
export default function Home() {
  return (
    <main className=" flex flex-col items-center self-stretch max-sm:p-0">
      <div className=" self-stretch">
      <NavigationBar/>
      </div>
      <div className=" lg:mx-40 lg:max-w-50%  max-lg:mx-4">
      <Heading/>
      <Content/>
      </div>
      <div className=" self-stretch">
      <HeroSection/>
      </div>
      <div className=" lg:mx-40 lg:w-auto">
      <Footer/>
      </div>
    </main>
  );
}

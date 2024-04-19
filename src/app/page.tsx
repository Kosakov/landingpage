import NavigationBar from "./components/navBar/nav";
import Heading from "./components/heading/headingAndImage";
import Content from "./components/content/content"; 
import HeroSection from "./components/heroSection/hero"
import Footer from "./components/footer/footer"
export default function Home() {
  return (
    <main>
      <NavigationBar/>
      <div className=" flex flex-col items-center">
      <Heading/>
      <Content/>
      </div>
      <HeroSection/>
      <Footer/>
    </main>
  );
}
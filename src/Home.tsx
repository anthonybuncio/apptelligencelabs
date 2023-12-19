import Title from "./components/Title";
import SubscribeForm from "./components/forms/SubscribeForm";
import Carousel from "./components/sections/Carousel";
import Feature from "./components/sections/Feature";
import ExampleServices from "./components/sections/ExampleServices";
import Testimonials from "./components/sections/Testimonials";

function Home() {
  return (
    <>
      <Title
        title={"Powerful web applications to streamline your workflows"}
        subtitle={
          "Transform your business with our cutting-edge SaaS solutions tailored to your unique needs."
        }
        url={"/about"}
        linkText={"Learn More"}
      />
      <Carousel />
      <ExampleServices title={"Your new favorite tool. And so much more."} />
      <Feature />
      <Testimonials />
      <SubscribeForm />
    </>
  );
}

export default Home;

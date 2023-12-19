import Title from "../components/Title";
import SubscribeForm from "../components/forms/SubscribeForm";
import AboutCta from "../components/sections/AboutCta";
import AboutDetail from "../components/sections/AboutDetail";
import ExampleServices from "../components/sections/ExampleServices";

const About = () => {
  return (
    <>
      <Title
        title={"Our team, expertise, and passion"}
        subtitle={
          "Learn about our approach, industry experience, and client satisfaction. Find out why customers choose us and what makes us unique."
        }
        url={"/contact"}
        linkText={"Get Started"}
      />
      <ExampleServices title={"How can we help you"} />
      <AboutDetail />
      <AboutCta />
      <SubscribeForm />
    </>
  );
};

export default About;

import Title from "../components/Title";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
  return (
    <>
      <Title
        title={"Contact our team"}
        subtitle={"Discover how we can collaborate on your next project."}
        url={""}
        linkText={""}
      />

      <ContactForm />

      <img
        className="object-cover w-full h-64 lg:h-96"
        src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
        alt=""
      />
    </>
  );
};

export default Contact;

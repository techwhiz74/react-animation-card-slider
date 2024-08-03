import React from "react";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";
function Contact(props) {
  return (
    <div>
      <div className="container_wrapper">
        <div className="bg-[#777776] min-h-[75vh] w-full relative flex flex-col-reverse xl:block">
          <ContactForm></ContactForm>
          <ContactAddress></ContactAddress>
        </div>
      </div>
    </div>
  );
}

export default Contact;

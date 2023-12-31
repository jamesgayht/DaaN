import styles from "../styles";
import { useState, useRef } from "react";
import emailJs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    // prevents the page from refreshing and clearing the input values
    event.preventDefault();

    // changes the send button to sending
    setLoading(true);

    emailJs
      .send(
        "service_mavv0ab",
        "template_heq4itm",
        {
          from_name: form.name,
          to_name: "daan",
          from_email: form.email,
          to_email: "general@daanpartners.com",
          message: form.message,
        },
        "croljsgvZ-qVPYrTf"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out, I will get back to you as soon as possible!"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(">>> form submit error: ", error);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow `}
    >
      {/* GRADIENT */}
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient" /> */}
      {/* END OF GRADIENT */}

      <div className="flex-1 flex flex-col font-poppins">
        <h2 className={`${styles.heading2}`}>Try our services today!</h2>

        {/* contact submit form */}
        <div className="flex flex-col w-full">
          {/* <div className="flex flex-wrap sm:justify-start justify-center "> */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 font-poppins"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 font-poppins">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please share your project objectives with us so that we can help you better."
                className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-gradient py-3 px-8 outline-none w-fit text-primary font-normal font-poppins shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </div>
      {/* end of contact submit form */}
    </section>
  );
}

export default Contact;

import React, { useRef, useState } from "react";
import { ontactLable } from "../constants";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = ({ language }) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sayyed Aadil",
          from_email: form.email,
          to_email: "syedaadil18792@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message ",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error(error);

      showAlert({
        show: true,
        text: "I didn't receive your message ",
        type: "danger",
      });
    }
  };

  return (
    <section className="c-space" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative  min-h-screen  flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text"> {ontactLable.formLabel[language]}</h3>
          <p className="text-lg text-white-600 mt-3">
            {ontactLable.label[language]}
          </p>
          <form
            ref={formRef}
            onSubmit={handleChange}
            className="mt-10 flex flex-col space-y-5"
          >
            <label className="space-y-3">
              <span className="field-label">
                {ontactLable.inputName[language]}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">
                {ontactLable.inputEmail[language]}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">
                {ontactLable.inputYourMessage[language]}
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={ontactLable.placeholder[language]}
              />
            </label>
            <button
              className="field-btn"
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>{" "}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Import necessary dependencies and components
"use client"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


// Define Contact component
const Contact = () => {
  // Declare formRef and form state variables using useState hook
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Declare loading state variable using useState hook
  const [loading, setLoading] = useState(false);

  // Define handleChange function to update form state when input fields change
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Define handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use emailjs library to send email
    emailjs
      .send(
        "service_88ac7s1",
        "template_r0q25ev",
        {
          from_name: form.name,
          to_name: "Jorge",
          form_email: form.email,
          to_email: "jbxamora@icloud.com",
          message: form.message,
        },
        "x1z0XVxJpE0k6XVbU"
      )
      .then(
        () => {
          setLoading(false);
          // Show success message and reset form state
          alert("Thank you. I will get back to you as soon as possible!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          // Show error message
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="bg-gray-800 dark:bg-white xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center font-serif">
      <div className="flex-[0.75] bg-black-100 dark:bg-gray-200 p-8 rounded-2xl flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-3xl mb-8 dark:text-black font-serif">Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-center dark:text-gray-800 ">
                Number
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Preffered # to contact?"
                required
                className="bg-tertiary dark:bg-white py-4 px-6 border placeholder:text-secondary dark:placeholder-black text-black dark:text-gray-800 rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-center dark:text-gray-800 ">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="bg-tertiary dark:bg-white py-4 px-6 placeholder:text-secondary border dark:placeholder-black text-black dark:text-gray-800 rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-center dark:text-gray-800">
                Details
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Name,
                
a description of the tattoo (size, placement, line work or shading)"
                className="bg-neutral-800 dark:bg-white py-4 px-6 placeholder:text-secondary dark:placeholder-black text-black dark:text-gray-800 rounded-lg outlined-none border font-medium"
              />
            </label>

            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <button
                type="submit"
                className="dark:bg-gray-200 dark:text-black mt-4 py-3 px-8 border border-gray-400 p-4 w-fit text-white font-bold shadow-md shadow-white rounded-xl mr-4 sm:justify-content-center"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function validator(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "*Name is required";
  }
  if (!values.email) {
    errors.email = "*Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "*Message is required";
  }
  return errors;
}
export default function Contact() {
  const notify = () =>
    toast.success("Sending Message !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  const { handleSubmit, handleChange, values, errors, handleReset } = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validateOnBlur: false,
      validateOnChange: false,
      validate: validator,
      onSubmit: (values) => {
        handleClick();
        handleReset();
      },
    }
  );

  function handleClick() {
    fetch("https://formspree.io/f/xayllbee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div id="contact" className="mb-10">
      <h2 className="text-center font-semibold mb-4 sheading">Get In Touch</h2>
      <div className="w-7/12 text-center contentCenter">
        <p>
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div className="pl-72">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-6">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md block w-3/5 pt-1 pb-1 pl-2"
            />
            <small className="pb-10 text-red-700">{errors.name}</small>
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md  block w-3/5 pt-1 pb-1 pl-2"
            />
            <small className="pb-10 text-red-700">{errors.email}</small>
          </div>
          <div className="mb-4">
            <label>Message</label>
            <textarea
              name="message"
              cols="30"
              rows="5"
              value={values.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md block w-3/5 pt-1 pb-1 pl-2"
            ></textarea>
            <small className="pb-10 text-red-700">{errors.message}</small>
          </div>
          <button
            type="submit"
            onClick={notify}
            className=" py-2 px-4 lang_btn border text-sm font-mono rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

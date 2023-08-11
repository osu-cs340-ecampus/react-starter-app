import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateCustomer() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  // useNavigate hook to redirect the user to the customers page
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Create a new customer object
    const newCustomer = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    // Make a POST request to the API
    try {
      const URL = process.env.REACT_APP_API_URL + "customers";
      const response = await axios.post(URL, newCustomer);
      if (response.status === 201) {
        // Redirect the user to the customers page
        navigate("/customers");
      } else {
        alert("Error creating customer");
      }
    } catch (error) {
      alert("Error creating customer");
      console.error("Error creating customer:", error);
    }
    // Reset the form fields if needed
    resetFormFields();
  };

  const resetFormFields = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <>
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" ref={nameRef} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={emailRef} />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" ref={phoneRef} />
        <button type="submit">Create Customer</button>
      </form>
    </>
  );
}

export default CreateCustomer;

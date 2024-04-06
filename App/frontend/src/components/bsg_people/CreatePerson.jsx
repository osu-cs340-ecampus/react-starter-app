import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePerson() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    homeworld: "",
    age: "",
  });
  
  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Create a new person object from the formData
    const newPerson = {
      fname: formData.fname,
      lname: formData.lname,
      homeworld: formData.homeworld,
      age: formData.age,
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "people";
      const response = await axios.post(URL, newPerson);
      if (response.status === 201) {
        navigate("/people");
      } else {
        alert("Error creating person");
      }
    } catch (error) {
      alert("Error creating person");
      console.error("Error creating person:", error);
    }
    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      fname: "",
      lname: "",
      homeworld: "",
      age: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Create BSG Person</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          defaultValue={formData.fname}
          onChange={handleInputChange}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          defaultValue={formData.lname}
          onChange={handleInputChange}
        />
        <label htmlFor="homeworld">Homeworld</label>
        <input
          type="number"
          name="homeworld"
          value={formData.homeworld}
          onChange={handleInputChange}
        />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        <button type="submit">Create Person</button>
      </form>
    </>
  );
}

export default CreatePerson;

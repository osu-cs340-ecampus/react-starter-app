import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdatePerson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPerson = location.state.person;

  const [formData, setFormData] = useState({
    fname: prevPerson.fname || '',
    lname: prevPerson.lname || '',
    homeworld: prevPerson.homeworld || '',
    age: prevPerson.age || '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevPerson
    if (JSON.stringify(formData) === JSON.stringify({
      fname: prevPerson.fname || '',
      lname: prevPerson.lname || '',
      homeworld: prevPerson.homeworld || '',
      age: prevPerson.age || '',
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevPerson
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "people/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating person");
        } else {
          alert(response.data.message);
          // Redirect to people page
          navigate("/people");
        }
      } catch (err) {
        console.log("Error updating person:", err);
      }
    }
  };

  return (
    <div>
      <h2>Update Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            onChange={handleInputChange}
            required
            defaultValue={prevPerson.fname}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            onChange={handleInputChange}
            required
            defaultValue={prevPerson.lname}
          />
        </div>
        <div>
          <label>Homeworld:</label>
          <input
            type="number"
            name="homeworld"
            onChange={handleInputChange}
            defaultValue={prevPerson.homeworld}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            onChange={handleInputChange}
            required
            defaultValue={prevPerson.age}
          />
        </div>
        <button type="button" onClick={() => navigate("/people")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePerson;


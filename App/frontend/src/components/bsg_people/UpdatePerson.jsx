import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdatePerson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const person = location.state.person;
  console.log(person);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    homeworld: "",
    age: "",
  });

  useEffect(() => {
    const fetchPersonByID = async () => {
      try {
        const URL = import.meta.env.VITE_API_URL + "people/" + id;
        const response = await axios.get(URL);
        setFormData(response.data);
      } catch (err) {
        console.log("Error fetching people data:", err);
      }
    };

    fetchPersonByID();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    try {
      const URL = import.meta.env.VITE_API_URL + "people/" + id;
      const response = await axios.put(URL, formData);
      if (response.status !== 200) {
        alert("Error updating person");
      } else {
        alert(response.data.message);
        navigate("/people");
      }
    } catch (err) {
      console.log("Error updating person:", err);
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
            defaultValue={formData.fname}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            onChange={handleInputChange}
            required
            defaultValue={formData.lname}
          />
        </div>
        <div>
          <label>Homeworld:</label>
          <input
            type="number"
            name="homeworld"
            onChange={handleInputChange}
            defaultValue={formData.homeworld}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            onChange={handleInputChange}
            required
            defaultValue={formData.age}
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

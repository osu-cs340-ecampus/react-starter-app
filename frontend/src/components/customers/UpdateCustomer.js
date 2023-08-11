import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const URL = process.env.REACT_APP_API_URL + "customers/" + id;
        const response = await axios.get(URL);
        setFormData(response.data);
      } catch (err) {
        console.log("Error fetching customer data:", err);
      }
    };

    fetchCustomerData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const URL = process.env.REACT_APP_API_URL + "customers/" + id;
      const response = await axios.put(URL, formData);
      if (response.status !== 200) {
        alert("Error updating customer");
      } else {
        alert(response.data.message);
        navigate("/customers");
      }
    } catch (err) {
      console.log("Error updating customer:", err);
    }
  };

  return (
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            required
            defaultValue={formData.name}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            required
            defaultValue={formData.email}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            onChange={handleInputChange}
            required
            defaultValue={formData.phone}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCustomer;

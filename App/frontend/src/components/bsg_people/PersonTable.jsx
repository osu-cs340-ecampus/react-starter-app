import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./PersonTableRow";
import axios from "axios";

const PeopleTable = () => {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "people";
      const response = await axios.get(URL);
      setPeople(response.data);
    } catch (error) {
      alert("Error fetching people from the server.");
      console.error("Error fetching people:", error);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      <h2>BSG Person Table</h2>
      {people.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No people on bsg found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Person ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Homeworld</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <TableRow key={person.id} person={person} fetchPeople={fetchPeople} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PeopleTable;

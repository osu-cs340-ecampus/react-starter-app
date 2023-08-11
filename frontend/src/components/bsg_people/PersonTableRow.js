import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";

const TableRow = ({ person, fetchPeople }) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit person page
  const handleEdit = () => {
    // We can access the id (and query the person) with useParams() in the UpdatePerson component
    navigate("/people/edit/" + person.id);
  };
  const handleDelete = async () => {
    try {
      const URL = process.env.REACT_APP_API_URL + "people/" + person.id;
      const response = await axios.delete(URL);
      // Ensure that the person was deleted successfully
      if (response.status !== 200) {
        alert("Error deleting person");
      } else {
        alert("Person deleted successfully");
      }
    } catch (err) {
      console.log("Err deleting person:", err);
    }
    fetchPeople();
  };

  return (
    <tr key={person.id}>
      <td>{person.id}</td>
      <td>{person.fname}</td>
      <td>{person.lname}</td>
      <td>{person.homeworld}</td>
      <td>{person.age}</td>
      <td>
        <BiEditAlt
          onClick={handleEdit}
          size={25}
          style={{ cursor: "pointer" }}
        />
      </td>
      <td>
        <BsTrash
          onClick={handleDelete}
          size={25}
          style={{ cursor: "pointer" }}
        />
      </td>
    </tr>
  );
};

export default TableRow;

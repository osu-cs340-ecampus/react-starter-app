import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const TableRow = ({ customer, fetchCustomers }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    // We can access the id (and query the customer) with useParams() in the UpdateCustomer component
    navigate("/customers/edit/" + customer.id);
  };
  const handleDelete = async () => {
    try {
      const URL = process.env.REACT_APP_API_URL + "customers/" + customer.id;
      const response = await axios.delete(URL);
      // Ensure that the customer was deleted successfully
      if (response.status !== 200) {
        alert("Error deleting customer");
      } else {
        alert("Customer deleted successfully");
      }
    } catch (err) {
      console.log("Err deleting customer:", err);
    }
    fetchCustomers();
  };

  return (
    <tr key={customer.id}>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
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

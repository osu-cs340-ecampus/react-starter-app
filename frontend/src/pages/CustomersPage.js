import { Routes, Route, Link } from "react-router-dom";
import CreateCustomer from "../components/customers/CreateCustomer";
import CustomerTable from "../components/customers/CustomerTable";
import UpdateCustomer from "../components/customers/UpdateCustomer";

function CustomersPage() {
  return (
    <div>
      <h1>Customers Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
          <li>
            <Link to="/customers/add">Add Customer</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CustomerTable />} />
        <Route path="/add" element={<CreateCustomer />} />
        <Route path="/edit/:id" element={<UpdateCustomer />} />
      </Routes>
    </div>
  );
}

export default CustomersPage;

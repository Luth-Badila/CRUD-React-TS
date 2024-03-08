import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const users = useSelector((state: any) => state.users);
  return (
    <div className="container">
      <h2>CRUD Using React Redux</h2>
      <Link to="/create">
        <button className="btn btn-success my-3">Create +</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, index: any) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
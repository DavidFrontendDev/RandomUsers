import "bootstrap/dist/css/bootstrap.min.css";
import useData from "./hooks/useData";
import User from "./components/User";

function App() {
  const { users, loading, error } = useData();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error trying to get the user data</p>;

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center">
      <h1 className="my-4">User List</h1>
      <main className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
        {users.map((user, index) => (
          <User
            key={index}
            email={user.email}
            name={`${user.name.first} ${user.name.last}`}
            picture={user.picture.large}
            phone={user.phone}
          />
        ))}
      </main>
    </div>
  );
}

export default App;

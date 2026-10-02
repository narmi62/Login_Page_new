import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-4xl font-bold text-orange-500">
          Welcome to Cineva
        </h1>

        <p className="text-gray-400 mt-3">
          You have successfully logged in.
        </p>

        <button
          onClick={logout}
          className="mt-6 bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;
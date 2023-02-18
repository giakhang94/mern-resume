import "./App.css";
import { CreateProject, Home, Login } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useAppContext } from "./context/appContext";
import { Header } from "./components";
import EditProject from "./pages/EditProject";
function App() {
  const { user } = useAppContext();
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={user ? <Outlet /> : <Login />}>
            <Route path="/admin/createProject" element={<CreateProject />} />
            <Route path="/admin/project/:id" element={<EditProject />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

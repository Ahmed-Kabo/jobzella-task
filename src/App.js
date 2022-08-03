import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddGroupText from "./Components/AddGroupText/AddGroupText";
import TasksPage from "./Pages/TasksPage/TasksPage";

function App() {
  const navigate = useNavigate();
  const { mainUser } = useSelector((state) => state.auth);
  return (
    <>
      <GlobalStyle />
      <Routes>
        {!mainUser ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="/" element={<Home />}>
            <Route index element={<AddGroupText />} />
            <Route path=":id" element={<TasksPage />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;

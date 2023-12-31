import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./features/usersSlice";
import { PROTECTED_ROUTES } from "./Routes/protected";
import { PUBLIC_ROUTES } from "./Routes/public";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  let [searchParams, setSearchParams] = useSearchParams();
  const page = 1 ?? searchParams.get("page");
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email && window.location.pathname === "/") {
      navigate(`/posts`);
    }
  }, []);

  const routes = isLoggedIn ? PROTECTED_ROUTES : PUBLIC_ROUTES;

  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} key={route.path} element={route.component} />
        ))}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

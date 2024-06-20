import { useNavigate } from "react-router-dom";

function AuthGuard() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) {
    return navigate("/comments");
  } else {
    return navigate("/admin");
  }
}

export default AuthGuard;

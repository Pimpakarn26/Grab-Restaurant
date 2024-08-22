import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AdminPage = ({ Children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate t0="/login" />;
  }
  if (user.roles.includes("ROLES_ADMIN")){
    return Children;
  }

  return <Navigate to="/notallowed" />;
};
export default AdminPage;

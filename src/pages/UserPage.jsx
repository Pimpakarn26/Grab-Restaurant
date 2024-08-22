import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const UserPage = ({ Children }) => {
    const { user } = useAuthContext();
    if(!user) {
        return <Navigate t0="/login" />;
    }
    return Children;
};
 export default UserPage;
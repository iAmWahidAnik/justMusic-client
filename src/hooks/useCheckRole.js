import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useCheckRole = () => {
    const {user, loading} = useContext(AuthContext);

    // axios.get(`http://localhost:3000/users/checkrole/${}`)
    const {data:checkRole, isLoading} = useQuery({
        queryKey: ['checkRole', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const response = await axios.get(`http://localhost:3000/users/checkrole/${user?.email}`)
            return response;
        }
    })
    return checkRole;
}

export default useCheckRole;
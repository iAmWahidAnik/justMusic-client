import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useCheckRole = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    if (!token) {
        return
    }
    const { data: checkRole, isLoading } = useQuery({
        queryKey: ['checkRole', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`https://just-music-server-side.vercel.app/users/checkrole/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response;
        }
    })
    return [checkRole, isLoading];
}

export default useCheckRole;
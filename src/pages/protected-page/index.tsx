import Loading from "@/components/loading";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";




export default function Protected({ children }) {
  
    const { isAuthenticated, loading } = useContext(AuthContext);

    return (
        <>        
        {
      
            !isAuthenticated
            ?
            <Navigate to={"/"} /> 
            : (
              <>
                {loading && <Loading />}
                {children}
              </>
            )
          
        }
    </>
    )
}

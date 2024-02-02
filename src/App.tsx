import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/authContext";

function App() {

  const {user} = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <h1 className="">Awakening Rpg</h1>
    </>
  )
}

export default App

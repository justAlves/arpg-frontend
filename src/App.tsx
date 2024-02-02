import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/authContext";
import { getGreetingsMessage } from "./lib/_helpers";
import DisplayNameModal from "./components/display-name-modal";

function App() {

  const {user} = useContext(AuthContext);

  const [greetingsMessage, setGreetingsMessage] = useState('');

  useEffect(() => {
    setGreetingsMessage(getGreetingsMessage());
  }, []);

  return (
    <>
      {
        !user?.displayName
        ? (
          <DisplayNameModal
            open={user?.displayName === ''}
          />
        ) : (
          <div className="p-4 h-screen">
            <span className="text-2xl font-bold">{greetingsMessage + user?.displayName}</span>
          </div>
        )
      }
    </>
  )
}

export default App

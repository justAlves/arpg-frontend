import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/authContext";
import { getGreetingsMessage } from "./lib/_helpers";
import DisplayNameModal from "./components/display-name-modal";
import { api } from "./api";
import { Button } from "./components/ui/button";
import Card from "./components/card";

function App() {

  const {user} = useContext(AuthContext);

  const [greetingsMessage, setGreetingsMessage] = useState('');
  const [characters, setCharacters] = useState([]);

  const getUserCharacters = async () => {
    try {
      const response = await api.get('/character/mine');
      console.log(response.data);
      setCharacters(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    setGreetingsMessage(getGreetingsMessage());
    getUserCharacters();
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
            <div>
              <h1 className="text-2xl font-bold">{greetingsMessage + user?.displayName}</h1>
            </div>
            <div className="my-8 flex justify-between items-center">
              <span className="font-semibold">Seus personagens</span>
              <Button
                size="sm"
                className="bg-blue-500 hover:bg-blue-600  text-stone-50"
              >
                Adicionar novo
              </Button>
            </div>
            <div>
              {characters.map((character, index) => (
                <Card key={index} data={character}/>
              ))}
            </div>
          </div>
        )
      }
    </>
  )
}

export default App

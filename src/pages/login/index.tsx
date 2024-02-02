import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "@/contexts/authContext";
import { history } from "@/lib/_helpers";

export default function Login() {

    
    history.navigate = useNavigate()
    history.location = useLocation()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { login } = useContext(AuthContext)

    const handleLogin = async () => {
        const response = await login(userName, password)

        if (response) {
            history.navigate('/')
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">AWAKENING</span>
            <span className="text-4xl font-bold text-blue-400 mb-12">RPG</span>
            <div className="flex flex-col w-80">
                <Input
                    placeholder="Nome de usuário"
                    className="mb-4 h-14"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <div className="flex gap-2">
                    <Input
                        placeholder="Senha"
                        className="mb-4 h-14 w-4/5"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="w-1/5 h-14"
                        onClick={handleShowPassword}
                    >
                        {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </Button>
                </div>
                <div className="flex flex-col items-center">
                    <Button
                        size={"lg"}
                        className="bg-blue-400 text-zinc-50 hover:bg-blue-300 mb-4"
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>
                    <Link to="/register" className="hover:underline underline-offset-4">
                        Novo por aqui? Registre-se
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

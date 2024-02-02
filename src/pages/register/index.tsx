import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = () => {
        alert(userName + ' ' + password)
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
                    placeholder="Email"
                    className="mb-4 h-14"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
                <Input
                    placeholder="Confirmar senha"
                    className="mb-4 h-14"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="flex flex-col items-center">
                    <Button
                        size={"lg"}
                        className="bg-blue-400 text-zinc-50 hover:bg-blue-300 mb-4"
                        onClick={handleLogin}
                    >
                        Criar conta
                    </Button>
                    <Link to="/login" className="hover:underline underline-offset-4">
                        Já tem uma conta? Faça login
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

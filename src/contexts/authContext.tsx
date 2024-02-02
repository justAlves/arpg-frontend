import { api } from "@/api";
import { parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
    id: string;
    username: string;
    displayName: string;
    email: string;
}

interface AuthContextData {
    user: User;
    isAuthenticated: boolean;
    loading: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    signup: (username: string, password: string, email: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
    children: ReactNode;
};


export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getUser(){
            const { '@awakening-rpg:token': token } = parseCookies();

            if (token) {
                await api.get('/user/me').then(response => {
                    const { id, username, displayName, email } = response.data;
                    setUser({ id, username, displayName, email });
                })
            }
        }

        getUser()
    }, [])

    const login = async (username: string, password: string) => {
        if (username.trim() === '' || password.trim() === '') {
            toast.error('Preencha todos os campos', { closeButton: true, });
            return;
        }

        try {
            setLoading(true);
            const response = await api.post('/auth', { username, password });
            setLoading(false);

            const { id, displayName, email, access_token } = response.data;

            setCookie(undefined, '@awakening-rpg:token', access_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            setUser({ id, username, displayName, email });

            api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

            return true

        } catch (error) {
            console.log(error)
        }
    };

    const signup = async (username: string, password: string, email: string) => {
        if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
            toast.error('Preencha todos os campos', { closeButton: true, });
            return;
        }

        try {
            setLoading(true);
            await api.post('/user', { 
                username, 
                password, 
                email
             });
            setLoading(false);

            toast.success('Usuário criado com sucesso', { closeButton: true, description: 'Autenticando...', duration: 2000 });

            await login(username, password);


             
        } catch (error) {
            console.log(error)
        }
    }

  return <AuthContext.Provider value={{user, isAuthenticated, login, signup, loading }}>{children}</AuthContext.Provider>;
}
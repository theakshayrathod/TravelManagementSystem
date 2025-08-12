    import { createContext, type Dispatch, type SetStateAction } from "react";
    import type { AuthResponse } from "../services/user/user";


    type AuthContextType = {
        user: AuthResponse | null
        setUser: Dispatch<SetStateAction<AuthResponse | null>>
    }


    export const AuthContext = createContext<AuthContextType>({user:null,
        setUser:()=>{}
    })
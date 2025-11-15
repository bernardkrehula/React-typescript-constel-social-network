import { useContext, createContext, useState } from "react";

export type LoginDataType = {
    status: string;
    token: string;
}

const AppContext = createContext<LoginDataType | undefined>(undefined);

const ConnectionContex = ({children}) => {
    const [loginData, setLoginData] = useState<LoginDataType>({
        status: '',
        token: ''
    });

    return (
        <AppContext.Provider value={{ loginData, setLoginData }}>
            {children}
        </AppContext.Provider>
    );
};
export default ConnectionContex;

export function useAppContext() {
    const ctx = useContext(AppContext);
    if(!ctx) throw new Error("useAppContext must be used inside ConnectionContext");
    return ctx;
}

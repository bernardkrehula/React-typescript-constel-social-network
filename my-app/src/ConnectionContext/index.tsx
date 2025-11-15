import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const ConnectionContex = ({children}) => {
    const [isTrue, setIsTrue] = useState(true);

    return (
        <AppContext.Provider value={{ isTrue }}>
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

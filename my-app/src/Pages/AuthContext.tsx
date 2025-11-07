import { Children, createContext, useContext } from "react";

const AuthProvider = createContext();

const Authcontext = ({children}) => {
    
    return(
        <AuthContent value={{}}>
            {children}
        </AuthContent>
    )
}
export const AuthContent = () => {
    const auth = useContext(AuthProvider);
    if(!auth) throw new Error('AuthContent mora biti unutar authContext');
    return auth
}
export default Authcontext;
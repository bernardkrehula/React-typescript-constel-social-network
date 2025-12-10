import type { ReactNode } from 'react';
import './index.css'

type BtnType = {
    onClick?: (e: React.MouseEvent) => void;
    variation?: string;
    children: string | ReactNode;
    type: 'button' | 'submit' | 'reset';
}
//Obavezan type jer ce ga na default stavljat submit i zajebat ce
const Btn = ({onClick, variation, children, type}: BtnType) => {
    return(
        <button className={`btn ${variation}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Btn;
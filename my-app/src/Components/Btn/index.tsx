import './index.css'

type BtnType = {
    onClick?: () => void;
    variation?: string;
    children: string;
    type?: 'button' | 'submit' | 'reset';
}

const Btn = ({onClick, variation, children, type}: BtnType) => {
    return(
        <button className={`btn ${variation}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Btn;
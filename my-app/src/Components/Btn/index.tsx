import './index.css'

type BtnType = {
    onClick?: () => void;
    variation: string;
    children: string;
}

const Btn = ({onClick, variation, children}: BtnType) => {
    return(
        <button className={`btn ${variation}`} onClick={onClick}>{children}</button>
    )
}

export default Btn;
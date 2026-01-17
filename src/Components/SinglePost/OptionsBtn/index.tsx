import './index.css';
import { HiDotsVertical } from "react-icons/hi";

type OptionsBtnType = {
    onClick: (e: React.MouseEvent) => void;
}

const OptionsBtn = ({onClick}: OptionsBtnType) => {

    return(
        <HiDotsVertical className="options-btn" onClick={onClick}/>
    )
}
export default OptionsBtn;
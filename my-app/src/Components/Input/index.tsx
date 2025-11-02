import './index.css'

type SingleInputType = {
    placeholder: string;
    name: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const SingleInput = ({placeholder, name, onChange}: SingleInputType) => {
    return(
        <input className={`single-input`} name={name} placeholder={placeholder} onChange={onChange}/>
    )
}

export default SingleInput;
import './index.css'
import type { UseFormRegister } from 'react-hook-form'
//How to pass default props to component 

type SingleInputType = {
    placeholder: string;
    name: string;
    register?: UseFormRegister<Record<string, string | number>>; //Ovo znaci kao da se uvijek ime definira kao string a to ime moze na sebe primiti string ili number
    variation?: string;
    type: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    value?: string
}

const SingleInput = ({variation, placeholder, name, type, register, onChange, value}: SingleInputType) => {
    const extraconfig = {
        name: name,
        type: type,
        placeholder: placeholder,
        onChange: onChange,
        value: value,
        ...( register? register(name) : {} ),
    }
    return <input className={`single-input ${variation}`} {...extraconfig}/>
}

export default SingleInput;
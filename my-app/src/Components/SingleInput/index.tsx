import './index.css'
import type { UseFormRegister } from 'react-hook-form'

type SingleInputType = {
    placeholder: string;
    name: 'email' | 'password';
    register: UseFormRegister<FormInputTypes>;
    variation?: string;
    type: string;
    onChange: (value: string) => void;
    value: string
}
export type FormInputTypes = {
    email: string;
    password: string;
}
//How to include prop conditionaly in react 
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
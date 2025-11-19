import './index.css'
import type { UseFormRegister } from 'react-hook-form'

type SingleInputType = {
    placeholder: string;
    name: 'email' | 'password';
    register: UseFormRegister<FormInputTypes>;
    variation: string;
    type: string;
}
export type FormInputTypes = {
    email: string;
    password: string;
}
//How to include prop conditionaly in react 
const SingleInput = ({variation, placeholder, name, type, register}: SingleInputType) => {
    const extraconfig = {
        name: name,
        type: type,
        placeholder: placeholder, 
        ...( register? register(name) : {} )
    }
    return <input className={`single-input ${variation}`} {...extraconfig}/>
}

export default SingleInput;
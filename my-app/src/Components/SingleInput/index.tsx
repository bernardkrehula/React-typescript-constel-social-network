import './index.css'
import type { UseFormRegister } from 'react-hook-form'

type SingleInputType = {
    placeholder: string;
    name: 'email' | 'password';
    register: UseFormRegister<FormInputTypes>;
    variation: string;
}
export type FormInputTypes = {
    email: string;
    password: string;
}

const SingleInput = ({variation, placeholder, name, register}: SingleInputType) => {
    if(register) return <input className={`single-input ${variation}`} placeholder={placeholder} {...register(name)}/>
    else return <input className={`single-input`} placeholder={placeholder}/>
}

export default SingleInput;
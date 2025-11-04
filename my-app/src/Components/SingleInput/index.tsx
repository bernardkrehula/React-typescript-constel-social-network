import './index.css'
import type { UseFormRegister } from 'react-hook-form'

type SingleInputType = {
    placeholder: string;
    name: 'email' | 'password';
    register: UseFormRegister<FormInputTypes>;
}
export type FormInputTypes = {
    email: string;
    password: string;
}

const SingleInput = ({placeholder, name, register}: SingleInputType) => {
    if(register) return(
        <input className={`single-input`} placeholder={placeholder} {...register(name)}/>
    )
}

export default SingleInput;
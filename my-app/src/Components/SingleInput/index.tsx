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
//How to include prop conditionaly in react 
const SingleInput = ({variation, placeholder, name, register}: SingleInputType) => {
    /*  
    const extraconfig = { 
        placeholder: placeholder, 
        ...{ register? ...register(name): {} }
    }
    */
    if(register) return <input className={`single-input ${variation}`} placeholder={placeholder} {...register(name)}/>
    else return <input className={`single-input ${variation}`} placeholder={placeholder}/>
}

export default SingleInput;
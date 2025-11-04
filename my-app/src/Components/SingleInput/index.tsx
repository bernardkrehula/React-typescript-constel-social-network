import './index.css'
import type { UseFormRegister } from 'react-hook-form'

type SingleInputType = {
    placeholder: string;
    name: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    register: UseFormRegister<FormInputTypes>;
}
type FormInputTypes = {
    email: string;
    password: string;
}

const SingleInput = ({placeholder, name, onChange, register}: SingleInputType) => {
    return(
        <input className={`single-input`} placeholder={placeholder} {...register(name)}/>
    )
}

export default SingleInput;
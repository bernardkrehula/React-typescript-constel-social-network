import './index.css'

type SingleInputType = {
    placeholder: string;
}

const SingleInput = ({placeholder}: SingleInputType) => {

    return(
        <input placeholder={placeholder} />
    )
}

export default SingleInput;
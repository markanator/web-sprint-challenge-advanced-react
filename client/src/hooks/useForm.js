// write your custom hook here to control your checkout form
import {useState} from 'react';

export const useForm = (initialValue) => {
    const [values, setValue] = useState(initialValue);

    const handleChanges = e => {
        console.log(e.target.name, e.target.value);
        setValue({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitForm = (func) =>{
        func(true);
    }

    return [values, handleChanges, onSubmitForm];
}
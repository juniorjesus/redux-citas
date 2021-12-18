import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [formValue, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...formValue,
            [target.name]: target.value
        });
    }

    const reset = () => {
        setValues(initialState);
    }

    return [formValue, handleInputChange, reset];
}
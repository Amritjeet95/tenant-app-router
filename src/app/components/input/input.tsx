import { Path, UseFormRegister } from "react-hook-form"

export interface InputFormValues {
    "Email": string
    "User name": number
    Password: string
}

interface InputProps{
    type: string;
    label: Path<InputFormValues>
    register: UseFormRegister<InputFormValues>
    required: boolean
}

export function Input({ register, type, label, required }: InputProps) {

    return (
        <div>
            <label>{label}</label>
            <input type={type} {...register(label, { required })} />
        </div>
    );
};






/*
    It is very useful to define the types of the props that a component can receive. 
    Here we extend the HTMLInputElement interface to define the InputProps interface.
    Now while using the Input component, we can see the supported attributes by an input element.

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string;
    required: boolean
}
*/

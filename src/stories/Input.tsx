import { styled } from "styled-components";

export interface InputProps {
    type: string;
    placeholder?: string;
    value?: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({
    type, placeholder, value, required, ...props
}) => {
    const StyledInput = styled.input`
        border: #e5e7eb solid;
        width: 50%;
        justify-items: center;
        padding: 1rem;
        align-items: start;
        border-radius: 0.5rem;
        outline: none;
        overflow-x: hidden;
        background: #f3f4f6;
        font-size: 1rem;
        line-height: 1rem;
        &::placeholder {
            color: #6b7280;
        }
    `
    return (
        <StyledInput type={type} placeholder={placeholder} value={value} required={required} {...props} />
    )
}

export default Input
import { styled } from "styled-components";

export interface ButtonProps {
    label: string;
    handleCLick?: () => void;
    width?: string;
    backgroundColor?: string;
    color?: string;
    border? : string;
    borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
    label, width, backgroundColor = 'none',color ,border ,borderRadius , handleCLick
}) => {
    const StyledButton = styled.button`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        outline: none;
        padding: 0.75rem;
        color: ${color};
        width: ${width};
        border: ${border ?? 'none'};
        background: ${backgroundColor};
        border-radius: ${borderRadius};
    `;
    const StyledSpan = styled.span`
        color: ${color};
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 500;
        flex-shrink: 0;
    `
    return (
        <StyledButton onClick={handleCLick}>
            <StyledSpan>
                {label}
            </StyledSpan>
        </StyledButton>
    );
};

export default Button;

import { StoryObj, Meta } from '@storybook/react';
import Input, { InputProps } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Components/Input',
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;
export const Base : Story = {
    args: {
        type: 'text',
        placeholder: 'First Name',
    }
}
export const Email : Story = {
    args: {
        type: 'email',
        placeholder: '@@@',
    }
}
export const Number : Story = {
    args: {
        type: 'number',
        placeholder: 'number',
        min: 0,
    } as Partial<InputProps>,
}
export const Date : Story = {
    args: {
        type: 'date',
    }
}
import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;
export const PrimaryButton: Story = {
    args: {
        backgroundColor: '#FFA824',
        label: 'Colored Button',
        color: 'white'
    },
};

export const SecondaryButton: Story = {
    args: {
        label: 'Colorless Button',
        border: '2px solid #ffa824',
        color: '#ffa824',
        handleCLick: () => alert('Hello'),
    },
}
export const FullWidthButton: Story = {
    args: {
        label: 'Full Width Button',
        borderRadius: '10px',
        border: '2px solid #3D6E65',
        color: '#3D6E65',
        width: '100%',
        handleCLick: () => alert('Hello'),
    },
}
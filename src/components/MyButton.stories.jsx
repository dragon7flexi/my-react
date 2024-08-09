import { ArgTypes } from '@storybook/blocks';
import MyButton from './MyButton';
import { type } from '@testing-library/user-event/dist/type';
import { userEvent } from '@storybook/test';

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
    ArgTypes: {
        primary: {
            type: 'boolean',
            description: 'Primaryカラーを有効にするか',
        },
        backgroundColor: {
            type: 'string',
            description: '背景色'
        },
        size: {
            type: {
                name: 'enum',
                value: ['small', 'medium', 'large']
            },
            control: {
                type: 'select',
            },
            label: {
                type: 'string',
                description: 'ボタ大きさ',
            },
            onClick: {
                type: 'function',
                description: 'clickハンドラー',
            }
        },
    },
    tags: ['autodocs'],
};

export const Index = {
    args: {
        primary: true,
        size: 'medium',
        label: 'ボタン',
    },
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        userEvent.click(button);
        userEvent.click(button);
        expect(args.onClick).toHaveBeenCalledTimes(2);
    }
};

export const White = {
    render: () => <MyButton size="small" label="ボタン" background-color="#fff" />
}
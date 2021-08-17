import React from 'react';
import { Story } from '@storybook/react';
import FrontonEnv from '../components/FrontonEnv';
import {
    RadioContainer,
} from '../components/Radio/Fronton';

const Template: Story = () => (
    <FrontonEnv>
        <RadioContainer>
            111
        </RadioContainer>
    </FrontonEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Fronton/Radio'
};

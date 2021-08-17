import React from 'react';
import { Story } from '@storybook/react';
import MozaicEnv from '../components/MozaicEnv';
import {
    RadioContainer,
} from '../components/Radio/Mozaic';

const Template: Story = () => (
    <MozaicEnv>
        <RadioContainer>
            11
        </RadioContainer>
    </MozaicEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Mozaic/Radio'
};

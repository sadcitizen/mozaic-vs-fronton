import React from 'react';
import { Story } from '@storybook/react';
import FrontonEnv from '../components/FrontonEnv';
import {
    RadioContainer,
    RadioIndicatorOff,
    RadioIndicatorOn,
    RadioLabel
} from '../components/Radio/Fronton';

const Template: Story = () => (
    <FrontonEnv>
        <RadioContainer>
            <RadioIndicatorOff>[&nbsp;]</RadioIndicatorOff>
            <RadioIndicatorOn>[*]</RadioIndicatorOn>
            <RadioLabel>Radio</RadioLabel>
        </RadioContainer>
    </FrontonEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Fronton/Radio'
};

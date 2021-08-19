import React from 'react';
import { Story } from '@storybook/react';
import MozaicEnv from '../components/MozaicEnv';
import {
    RadioContainer,
    RadioIndicatorOff,
    RadioIndicatorOn,
    RadioLabel
} from '../components/Radio/Mozaic';

const Template: Story = () => (
    <MozaicEnv>
        <RadioContainer>
            <RadioIndicatorOff>[&nbsp;]</RadioIndicatorOff>
            <RadioIndicatorOn>[*]</RadioIndicatorOn>
            <RadioLabel>Radio</RadioLabel>
        </RadioContainer>
    </MozaicEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Mozaic/Radio'
};

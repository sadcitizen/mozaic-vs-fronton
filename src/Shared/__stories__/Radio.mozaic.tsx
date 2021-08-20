import React from 'react';
import { Story } from '@storybook/react';
import MozaicEnv from '../components/MozaicEnv';
import { Radio as RadioComponent } from '../components/Radio/Mozaic';

const Template: Story = () => (
    <MozaicEnv>
        <RadioComponent>Radio</RadioComponent>
    </MozaicEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Mozaic/Radio',
    component: RadioComponent
};

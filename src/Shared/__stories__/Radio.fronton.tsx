import React from 'react';
import { Story } from '@storybook/react';
import FrontonEnv from '../components/FrontonEnv';
import { Radio as RadioComponent } from '../components/Radio/Fronton';

const Template: Story = () => (
    <FrontonEnv>
        <RadioComponent size="m">Radio</RadioComponent>
    </FrontonEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Fronton/Radio',
    component: RadioComponent
};

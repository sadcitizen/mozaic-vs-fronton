import React from 'react';
import { Story } from '@storybook/react';
import FrontonEnv from '../components/FrontonEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Fronton';

const Template: Story = () => (
    <FrontonEnv>
        <RadioGroup>
            <RadioComponent size="m" value="radio">Radio</RadioComponent>
        </RadioGroup>
    </FrontonEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Fronton/Radio',
    component: RadioComponent
};

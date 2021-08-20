import React from 'react';
import { Story } from '@storybook/react';
import FrontonEnv from '../components/FrontonEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Fronton';

const Template: Story = () => (
    <FrontonEnv>
        <RadioGroup value="go">
            <RadioComponent value="go">Go</RadioComponent>
            <RadioComponent value="python">Python</RadioComponent>
            <RadioComponent value="java">Java</RadioComponent>
            <RadioComponent value="c#">C#</RadioComponent>
            <RadioComponent value="rust">Rust</RadioComponent>
        </RadioGroup>
    </FrontonEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Fronton/Radio',
    component: RadioComponent
};

import React from 'react';
import { Story } from '@storybook/react';
import MozaicEnv from '../components/MozaicEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Mozaic';

const Template: Story = () => (
    <MozaicEnv>
        <RadioGroup value="go">
            <RadioComponent value="go">Go</RadioComponent>
            <RadioComponent value="python">Python</RadioComponent>
            <RadioComponent value="java">Java</RadioComponent>
            <RadioComponent value="c#">C#</RadioComponent>
            <RadioComponent value="rust">Rust</RadioComponent>
        </RadioGroup>
    </MozaicEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Mozaic/Radio',
    component: RadioComponent
};

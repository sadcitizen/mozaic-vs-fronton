import React from 'react';
import { Story } from '@storybook/react';
import FrontonEnv from '../components/FrontonEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Fronton';
import languages from '../__fixtures__/languages';

const Template: Story = () => (
    <FrontonEnv>
        <RadioGroup value="go">
            <RadioGroup value={languages[0].name}>
                {languages.map(lang => (
                    <RadioComponent key={lang.name} value={lang.name}>
                        {lang.label}
                    </RadioComponent>
                ))}
            </RadioGroup>
        </RadioGroup>
    </FrontonEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Fronton/Radio',
    component: RadioComponent
};

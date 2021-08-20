import React from 'react';
import { Story } from '@storybook/react';
import MozaicEnv from '../components/MozaicEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Mozaic';
import languages from '../__fixtures__/languages';

const Template: Story = () => (
    <MozaicEnv>
        <RadioGroup value={languages[0].name}>
            {languages.map(lang => (
                <RadioComponent key={lang.name} value={lang.name}>
                    {lang.label}
                </RadioComponent>
            ))}
        </RadioGroup>
    </MozaicEnv>
);

export const Radio = Template.bind({});

export default {
    title: 'Mozaic/Radio',
    component: RadioComponent
};

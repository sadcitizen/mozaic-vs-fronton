import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import languages from '../__fixtures__/languages';
import MozaicEnv from '../components/MozaicEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Mozaic';
import { IRadioProps } from '../components/Radio/Mozaic/Radio';

const GroupTemplate: Story = () => {
    const [language, setLanguage] = useState(languages[0].name);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setLanguage(event.target.value);

    return (
        <MozaicEnv>
            <RadioGroup value={language} onChange={handleChange}>
                {languages.map(lang => (
                    <RadioComponent key={lang.name} value={lang.name}>
                        {lang.label}
                    </RadioComponent>
                ))}
            </RadioGroup>
        </MozaicEnv>
    );
};

export const Group = GroupTemplate.bind({});

const RadioTemplate: Story<IRadioProps> = args => <RadioComponent {...args} />;

export const Radio = RadioTemplate.bind({});

Radio.args = {
    name: 'radio',
    value: 'radio',
    isDisabled: false,
    isInvalid: false,
    isChecked: false
};

export default {
    title: 'Mozaic/Radio',
    component: RadioComponent
};

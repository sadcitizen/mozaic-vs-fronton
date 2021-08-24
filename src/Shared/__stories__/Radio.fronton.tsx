import React, { FC, ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import languages from '../__fixtures__/languages';
import FrontonEnv from '../components/FrontonEnv';
import RadioGroup from '../components/RadioGroup';
import { Radio as RadioComponent } from '../components/Radio/Fronton';
import { IRadioProps } from '../components/Radio/Fronton/Radio';

const GroupTemplate: Story = () => {
    const [language, setLanguage] = useState(languages[0].name);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setLanguage(event.target.value);

    return (
        <FrontonEnv>
            <RadioGroup value={language} onChange={handleChange}>
                {languages.map(lang => (
                    <RadioComponent key={lang.name} value={lang.name}>
                        {lang.label}
                    </RadioComponent>
                ))}
            </RadioGroup>
        </FrontonEnv>
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
    title: 'Fronton/Radio',
    component: RadioComponent
};

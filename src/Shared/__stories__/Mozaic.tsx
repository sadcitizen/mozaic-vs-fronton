import React from 'react';
import { Story } from '@storybook/react';
import { default as MozaicCardComponent } from '../components/Card';

const Template: Story = () => <MozaicCardComponent />;

export const Card = Template.bind({});

export default {
    title: 'Mozaic/Card'
};

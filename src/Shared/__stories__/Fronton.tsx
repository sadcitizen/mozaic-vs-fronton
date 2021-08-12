import React from 'react';
import { Story } from '@storybook/react';
import { default as FrontonCardComponent } from '../components/Card';

const Template: Story = () => <FrontonCardComponent />;

export const Card = Template.bind({});

export default {
    title: 'Fronton/Card'
};

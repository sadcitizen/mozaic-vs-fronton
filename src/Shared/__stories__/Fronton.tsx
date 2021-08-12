import React from 'react';
import { Story } from '@storybook/react';
import { default as CardComponent } from '../components/Card';

const Template: Story = () => <CardComponent />;

export const Card = Template.bind({});

export default {
    title: 'Fronton/Card'
};

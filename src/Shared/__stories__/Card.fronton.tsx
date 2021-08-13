import React from 'react';
import { Story } from '@storybook/react';
import { default as CardComponent } from '../components/Card';
import CardContainer from '../components/Card/Fronton/CardContainer';

const Template: Story = () => (
    <CardContainer>
        <CardComponent />
    </CardContainer>
);

export const Card = Template.bind({});

export default {
    title: 'Fronton/Card'
};

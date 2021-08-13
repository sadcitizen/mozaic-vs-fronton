import React from 'react';
import { Story } from '@storybook/react';
import { default as FrontonCardComponent } from '../components/Card';
import FrontonCardContainer from '../components/Card/FrontonCardContainer';

const Template: Story = () => (
    <FrontonCardContainer>
        <FrontonCardComponent />
    </FrontonCardContainer>
);

export const Card = Template.bind({});

export default {
    title: 'Fronton/Card'
};

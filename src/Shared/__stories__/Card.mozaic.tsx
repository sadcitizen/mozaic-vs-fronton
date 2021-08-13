import React from 'react';
import { Story } from '@storybook/react';
import { default as MozaicCardComponent } from '../components/Card';
import MozaicCardContainer from '../components/Card/MozaicCardContainer';

const Template: Story = () => (
    <MozaicCardContainer>
        <MozaicCardComponent />
    </MozaicCardContainer>
);

export const Card = Template.bind({});

export default {
    title: 'Mozaic/Card'
};

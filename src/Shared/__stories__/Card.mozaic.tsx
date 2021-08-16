import React from 'react';
import { Story } from '@storybook/react';
import MozaicEnv from '../components/MozaicEnv';
import {
    CardBody,
    CardContainer,
    CardContent,
    CardFigure,
    CardFooter,
    CardSubtitle,
    CardTitle
} from '../components/Card/Mozaic';

const Template: Story = () => (
    <MozaicEnv>
        <CardContainer>
            <CardFigure
                src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640"
                alt="Card"
            />
            <CardContent>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>There can be a subtitle here.</CardSubtitle>
                <CardBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </CardBody>
                <CardFooter>
                    <a href="/">Default link</a>
                </CardFooter>
            </CardContent>
        </CardContainer>
    </MozaicEnv>
);

export const Card = Template.bind({});

export default {
    title: 'Mozaic/Card'
};

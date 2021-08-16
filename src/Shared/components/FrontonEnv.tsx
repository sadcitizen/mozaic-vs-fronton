import React, { FC } from 'react';
import { CssBaseline, ThemeProvider } from 'fronton-react';

const FrontonEnv: FC = ({ children }): JSX.Element => (
    <ThemeProvider>
        <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
);

export default FrontonEnv;

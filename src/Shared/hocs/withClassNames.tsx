import React, { ComponentType, ReactNode } from 'react';
import { IClassNames } from '../domain/ClassNames';

export default function withClassNames<P, CN>(Component: ComponentType<P & IClassNames<CN>>, classNames: CN) {
    // eslint-disable-next-line react/display-name
    return (props: P): ReactNode => <Component {...props} classNames={classNames} />;
}

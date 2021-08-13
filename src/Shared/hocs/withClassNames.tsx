import React from 'react';

export default function withClassNames<P, CN>(Component: React.ComponentType<P>, classNames: CN) {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,react/display-name
    return (props: P) => <Component classNames={classNames} {...props} />;
}

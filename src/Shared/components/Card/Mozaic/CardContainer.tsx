import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardContainerProps, ICardContainerClassNames>(CardContainer, {
    container: 'mc-card'
});

import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardContainerProps, ICardContainerClassNames>(CardContainer, {
    container: styles.container
});

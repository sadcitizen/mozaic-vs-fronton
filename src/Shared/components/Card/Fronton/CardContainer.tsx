import CardContainer, { ICardContainerClassNames, ICardContainerProps } from '../CardContainer';
import withClassNames from '../../../hocs/withClassNames';
import styles from './CardContainer.module.css';

export default withClassNames<ICardContainerProps, ICardContainerClassNames>(CardContainer, {
    container: styles.container
});

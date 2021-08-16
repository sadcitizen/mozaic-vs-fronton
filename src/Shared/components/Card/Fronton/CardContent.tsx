import CardContent, { ICardContentClassNames, ICardContentProps } from '../CardContent';
import withClassNames from '../../../hocs/withClassNames';
import styles from './CardContent.module.css';

export default withClassNames<ICardContentProps, ICardContentClassNames>(CardContent, {
    container: styles.container
});

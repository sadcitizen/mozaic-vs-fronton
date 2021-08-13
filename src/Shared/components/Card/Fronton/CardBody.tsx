import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import withClassNames from '../../../hocs/withClassNames';
import styles from './CardBody.module.css';

export default withClassNames<ICardBodyProps, ICardBodyClassNames>(CardBody, {
    container: styles.container
});

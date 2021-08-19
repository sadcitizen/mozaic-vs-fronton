import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardBodyProps, ICardBodyClassNames>(CardBody, {
    body: styles.body
});

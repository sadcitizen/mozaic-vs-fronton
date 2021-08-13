import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardBodyProps, ICardBodyClassNames>(CardBody, {
    container: 'mc-card__body'
});

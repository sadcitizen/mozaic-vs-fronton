import CardBody, { ICardBodyClassNames, ICardBodyProps } from '../CardBody';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardBodyProps, ICardBodyClassNames>(CardBody, {
    body: 'mc-card__body'
});

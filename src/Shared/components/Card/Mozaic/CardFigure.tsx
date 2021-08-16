import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure'
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<ICardFigureProps, ICardFigureClassNames>(CardFigure, {
    container: 'mc-card__visual',
    image: 'mc-card__img'
});

import CardFigure, { ICardFigureClassNames, ICardFigureProps } from '../CardFigure';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Card.module.css';

export default withClassNames<ICardFigureProps, ICardFigureClassNames>(CardFigure, {
    figure: styles.visual,
    image: styles.image
});

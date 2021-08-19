import RadioContainer, { IRadioContainerClassNames, IRadioContainerProps } from '../RadioContainer';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Radio.module.css';

export default withClassNames<IRadioContainerProps, IRadioContainerClassNames>(RadioContainer, {
    container: styles.container
});

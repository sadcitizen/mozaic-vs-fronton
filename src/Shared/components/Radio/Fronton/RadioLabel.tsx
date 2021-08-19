import RadioLabel, { IRadioLabelProps, IRadioLabelClassNames } from '../RadioLabel';
import withClassNames from '../../../hocs/withClassNames';
import styles from './Radio.module.css';

export default withClassNames<IRadioLabelProps, IRadioLabelClassNames>(RadioLabel, {
    label: styles.label
});

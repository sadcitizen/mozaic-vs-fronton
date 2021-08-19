import RadioLabel, { IRadioLabelProps, IRadioLabelClassNames } from '../RadioLabel';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<IRadioLabelProps, IRadioLabelClassNames>(RadioLabel, {
    label: ''
});

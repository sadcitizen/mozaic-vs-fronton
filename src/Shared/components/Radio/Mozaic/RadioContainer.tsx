import RadioContainer, { IRadioContainerClassNames, IRadioContainerProps } from '../RadioContainer';
import withClassNames from '../../../hocs/withClassNames';

export default withClassNames<IRadioContainerProps, IRadioContainerClassNames>(RadioContainer, {
    container: 'mc-radio',
    input: 'mc-radio__input'
});

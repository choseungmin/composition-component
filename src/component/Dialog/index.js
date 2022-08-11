import DialogMain from './DialogMain';
import DialogTitle from './DialogTitle';
import DialogLabelButton from './DialogLabelButton';
import DialogCheckBox from './DialogCheckBox';

export const Dialog = Object.assign(DialogMain, {
  // Dimmed: DialogDimmed,
  Title: DialogTitle,
  // Subtitle: DialogSubtitle,
  // Description: DialogDescription,
  // Comment: DialogComment,
  // CheckButton: DialogCheckButton,
  CheckBox: DialogCheckBox,
  // TextButton: DialogTextButton,
  // Button: DialogButton,
  LabelButton: DialogLabelButton,
  // Divider: DialogDivider,
});
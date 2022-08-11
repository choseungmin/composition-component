import logo from './logo.svg';
import { Dialog } from "./component/Dialog";

function App() {
  return (
    <div >
        <Dialog isOpen>
          <Dialog.Title>title</Dialog.Title>
          <Dialog.CheckBox>체크박스</Dialog.CheckBox>
          <Dialog.CheckBox>체크박스</Dialog.CheckBox>
          <Dialog.LabelButton>LabelButton</Dialog.LabelButton>
        </Dialog>
    </div>
  );
}

export default App;


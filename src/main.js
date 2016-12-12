
import Backdrop from 'components/react-backdrop';

let instance;
export class BackdropController {
  static getInstance(inProps) {
    instance = instance || Backdrop.newInstance(inProps);
    return instance;
  }
  static show(){
    instance.component.show();
  }
  static hide(){
    instance.component.hide();
  }
}

export default Backdrop;
// export default class extends React.Component{
//   static show(){}
//   static hide(){}
// }

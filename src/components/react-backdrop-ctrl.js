import Backdrop from 'components/react-backdrop';

let instance;

export default class BackdropCtrl {
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

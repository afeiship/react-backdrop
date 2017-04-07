import ReactBackdrop from 'components/react-backdrop';

let instance;

export default class ReactBackdropCtrl {
  static createInstance(inProps) {
    instance = instance || ReactBackdrop.newInstance(inProps);
    return instance;
  }
  static show(inCallback){
    instance.component.show(inCallback);
  }
  static hide(inCallback){
    instance.component.hide(inCallback);
  }
  static destroy(){
    instance.destroy();
    instance=null;
  }
}

# react-backdrop
> Backdrop for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    position: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    value: false,
    onChange: noop,
    position: 'fixed',
    color: 'black'
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-backdrop --registry=https://registry.npm.taobao.org
```

```js
import ReactBackdrop from 'react-backdrop';
```

```scss
// customize your styles:
$react-backdrop-options:(
);

@import 'node_modules/react-backdrop/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-backdrop --save
// import : import ReactBackdrop from 'react-backdrop'

class App extends React.Component{
  state = {
    value: false
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.rc = React.createRef();
    window.ReactBackdrop = ReactBackdrop;
  }

  _show = e =>{
    this.setState({ value: true });
  };

  _hide = e =>{
    this.setState({ value: false });
  };

  _onChange = e =>{
    console.log('on change, value is:', e.target.value);
  };

  _onClick = e =>{
    console.log(this,'click!');
  };

  render(){
    const container = document.getElementById('app');
    return (
      <div className="hello-react-backdrop" id="test-container">
        <ReactBackdrop
        onChange={this._onChange}
        value={this.state.value}
        container={container}
        ref={this.rc} />
        <button onClick={this._show}>Show</button>
      </div>
    );
  }
}

```

## resouces:
+ https://codepen.io/chrisbuttery/pen/cxnmJ
+ https://ask.helplib.com/css/post_45874

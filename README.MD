# react-backdrop
> React backdrop.

## size:
+     react-backdrop.js   8.3 kB
+ react-backdrop.js.map  51.4 kB

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
static propTypes = {
  visible:PropTypes.bool,
  style:PropTypes.object,
  className:PropTypes.string,
  onClick:PropTypes.func,
}
```

## usage:
```jsx
class App extends React.Component{

  state={
    backVisible:false
  }

  componentWillMount(){
    this._backdrop = ReactBackdropCtrl.createInstance({
      onClick:function(){
        ReactBackdropCtrl.hide(()=>{
          console.log('on hidden..')
        });
      }
    });
  }

  _click(name){
    ReactBackdropCtrl.show(function(){
      console.log('has show...')
    });
  }

  render(){
    return (
      <div className="hello-backdrop">
        <button onClick={this._click.bind(this,'btn')}>ClickMe</button>
      </div>
    );
  }
}
```

## todos:
- [ ] props style -> opacity
- [ ] abstract callback part
- [ ] remove ctrl static class, stay simple

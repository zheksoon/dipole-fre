# dipole-fre

(Fre)[https://github.com/yisar/fre] bindings for (dipole)[https://github.com/zheksoon/dipole] reactive state management library.

# API

## observer(component)

Creates reactive version of the passed component.

Example:

```js
import { render } from "fre";
import { action, observable, makeObservable } from "dipole";
import { observer } from "dipole-fre";

class CounterModel {
  count = observable.prop(0);

  constructor() {
    makeObservable(this);
  }

  inc = action(() => (this.count += 1));
  dec = action(() => (this.count -= 1));
  reset = action(() => (this.count = 0));
}

const Counter = observer(({ model }) => {
  return (
    <div>
      Counter is: {model.count}
      <button onClick={model.inc}>+</button>
      <button onClick={model.dec}>-</button>
      <button onClick={model.reset}>Reset</button>
    </div>
  );
});

const counterModel = new CounterModel();

render(<Counter model={counterModel} />, document.getElementById('root'));
```

# License

MIT

# Author

Eugene Daragan
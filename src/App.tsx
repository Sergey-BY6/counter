import React from 'react';
import './App.css';
import {CounterRedux} from './CounterRedux/CounterRedux';
import {Counter2Redux} from './Counter2Redux/Counter2Redux';
import {store} from './CounterRedux/ReduxCounter/store';
import {Provider} from 'react-redux';
import {store2} from './Counter2Redux/ReduxCounter2/store2';






function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <CounterRedux/>
        </Provider>
        <Provider store={store2}>
            <Counter2Redux/>
        </Provider>
    </div>
  );
}

export default App;

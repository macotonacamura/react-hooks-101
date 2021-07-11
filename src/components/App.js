import React,{ useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
// import Event from './Event'
import Events from './Events'
import reducer from '../reducers'


const App = () => {
	const [state, dispatch] = useReducer(reducer, []) //reducerで扱うものはイベント一覧[] //状態遷移をさせたいタイミング(onClick{addEvent})でdispatchを呼んでアクションを渡してあげる
  return (
    <div className="container-fluid">
    	<EventForm state={state} dispatch={dispatch}/>
    	<Events state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
//コールバックの設定ができるのがuseEffect
const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => { //useEffectはrendering(<></>)の後で実行されている
    console.log('This is like componentDidMount or componentDidUpdate')
  }) //変更があるたびに何回もrenderingされてしまう

  useEffect(() => { //useEffectはrendering(<></>)の後で実行されている
    console.log('This is like componentDidMount')
  },[])//ページ開いた時だけrenderingされる

  useEffect(() => { //useEffectはrendering(<></>)の後で実行されている
    console.log('This callback is for name only')
  },[name])//特定のパラメーターの描画時、または変更時のみ実行


  return (
    <>
      <p>現在の{state.name}は{state.price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

App.defaultProps = {
    name: '',
    price:1000
}

export default App;


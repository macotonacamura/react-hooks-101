import React, {useState} from 'react'

const App = props => {
//useStateは個々の値だけじゃなく、オブジェクトを持つこともできる
  const [state, setState] = useState(props)
  const { name, price } = state //state.priceと書かなくて良くなる (分割代入)
  // const [name, setName] = useState(props.name) いらなくなる
  // const [price, setPrice] = useState(props.price) いらなくなる

  // const reset = () => setState(props) //setState(props)だけで、上2行の役割を果たす ⇨ 関数自体短いからonClick={}内に処理を書いちゃう
    // setPrice(props.price) いらない
    // setName(props.name)　いらない

  return ( //onClick={この中に関数を書いてもOK}
    <>
      <p>現在の{state.name}は{state.price}円です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/> //setStateの引数はオブジェクトだから、{}で囲う。...stateでstateを展開して、nameをアップデート。
    </>
  )
}

App.defaultProps = {
    name: '',
    price:1000
}

export default App;


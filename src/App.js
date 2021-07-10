import React, {useState} from 'react'

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

//e.target.value >>> onChangeが発生した時のinputに入力されている文字列

  return ( //onClick={この中に関数を書いてもOK}
    <>
      <p>現在の{name}は{price}円です</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  )
}

App.defaultProps = {
    name: '',
    price:1000
}

export default App;

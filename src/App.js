import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)//useState:配列を返す、常に二つの要素を返す。setCountはcountを操作する権限を持つ

  const increment = () => setCount(count + 1) //②状態を+1させてあげる処理をしたい  //①<button>にて、 +1するためにincreamentという関数を用意してあげよう
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount +1 ) //引数を関数にした処理もできる。やってることは①と同じ
  const decrement2 = () => setCount(previousCount => previousCount -1 ) //prevcountが引数 それ
  const reset = () => setCount(0)
  const double = () => setCount(count*2)
  // const devideThree = (count) => {
  //   if (count % 3 === 0 ) {
  //    return setCount(count%3)
  //  }
  // }
  const devideThree = () => setCount(previousCount => {
    if (count % 3 === 0 ){
      return previousCount / 3
    } else {
      return previousCount
    }
  })

  return (
    <>
    <div>count: {count}</div>
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>x2</button>
      <button onClick={devideThree}>3倍数の時だけ3で割る</button>
    </div>
    </>
  )
}

export default App;

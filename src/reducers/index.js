import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    DELETE_EVENT
} from '../actions'

//イベント作成後、削除ボタン押下後、全削除押下後、どんなデータを返すのか？ ⇨ それをApp.jsにて反映させる
const events = (state = [], action) => { //イベントを管理する関数定義
	switch(action.type){
		case CREATE_EVENT:
		const event = { title: action.title, body: action.body }
		const length = state.length //ここでstateの数を調べるために、要素の長さを調べてあげる必要がある[]なのか[色々入ってる]のか。idのため
		const id = length === 0 ? 1 : state[length -1 ].id + 1 //このlength - 1は-1することによって最後の要素を取り出すことができる
			return [...state, {id, ...event}] // [...stateで今あるstateを展開、{要素を追加}]
		case DELETE_EVENT:
			return state.filter(event => event.id !== action.id) //削除ボタンで選択された項目以外のものを抽出したい
		case DELETE_ALL_EVENTS:
			return []
		default:
			return state
	}
}

export default events //コンポーネント利用からexportする


// if(length === 0){
// 	id = 1
// } else {
// 	id = state[length -1 ].id + 1 //このlength - 1は-1することによって最後の要素を取り出すことができる
// }
// return state
// }
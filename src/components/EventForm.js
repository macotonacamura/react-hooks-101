import React,{ useContext, useState } from 'react'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS
} from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
    // const [state, dispatch] = useReducer(reducer, []) //reducerで扱うものはイベント一覧[] //状態遷移をさせたいタイミング(onClick{addEvent})でdispatchを呼んでアクションを渡してあげる
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
        e.preventDefault() //画面全体でリロードするのを防ぐ。addEventにだけリロード適用される
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })
        setTitle('') //dispatchを呼んだら空にする
        setBody('') //dispatchを呼んだら空にする
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのインベントを本当に削除しても良いですか？')
        if (result) dispatch({ type: DELETE_ALL_EVENTS }) //resultがtrueの場合にdispatchを実行
    }

    const unCreatable = title === '' || body === '' //disabled={unCreatable}でtrue false判定をしてボタンが有効かどうか判断。空の時は押せない


    return(
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">Title</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">Body</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0 }>全てのイベントを削除する</button>
            </form>
        </>
        )
}

export default EventForm;

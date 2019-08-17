import React, { useContext } from 'react'

import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const handleClickDeleteButton = () => {
        const result = window.confirm(`本当にイベント(id=${event.id})を削除してもいいですか？`)
        if (result) dispatch({ type: DELETE_EVENT, id: event.id })
    }
    return (<tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>)
}

export default Event
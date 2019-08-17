import React, { useContext } from 'react'

import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8061 } from '../utils' 

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const handleClickDeleteButton = () => {
        const result = window.confirm(`本当にイベント(id=${event.id})を削除してもいいですか？`)
        if (result){
            dispatch({ type: DELETE_EVENT, id: event.id })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `イベント(id=${event.id})を削除しました`,
                operatedAt: timeCurrentIso8061
            })
        }

    }
    return (<tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>)
}

export default Event
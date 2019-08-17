import React, { useEffect, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

function App() {
  // ローカルストレージからstateを取得
  const appState = localStorage.getItem(APP_KEY)
  // ローカルストレージにデータがあればそのJSONデータをパースして初期化
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // stateが変更される度にJSONデータでローカルストレージに保存される
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
"use client"
// import { useRef } from "react"
import store from "./reducers"
import { Provider } from 'react-redux'

export default function StoreProvider({ children }) {   
    return <Provider store={store}>{children}</Provider>
  }

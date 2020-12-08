import React from 'react'
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom'
import MyInfo from "../src/components/MyInfo.js"

ReactDOM.render(
  <MyInfo />
  , document.getElementById("root")
)
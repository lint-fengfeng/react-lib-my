import React from 'react'
import ReactDOM from 'react-dom'
import Toast from '../dist/tool.esm'
function App() {
  const click = () => {
    Toast.info({ text: '哈哈' })
  }
  return <div onClick={click}>按我</div>
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
)
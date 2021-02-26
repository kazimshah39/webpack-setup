import './style.css'
import React from 'cp/react'
import ReactDOM from 'cp/react-dom'

function ExampleComponent() {
  return (
    <div>
    <h1>Hello from Main.jsxu</h1>
    </div>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

// inject new JavaScript asynchronously
if (module.hot) {
  module.hot.accept()
}
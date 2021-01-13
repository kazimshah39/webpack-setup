import React from 'react'
import ReactDOM from 'react-dom'

function ExampleComponent() {
  return (
    <div>
    <h1>Hello from Main.jsxt</h1>
    </div>
  )
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))

// inject new JavaScript asynchronously
if (module.hot) {
  module.hot.accept()
}
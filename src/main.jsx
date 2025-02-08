// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import Didact from './didact'

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

console.log(element);

const container = document.getElementById("root")
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

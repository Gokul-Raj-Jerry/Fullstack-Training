import { createRoot } from "react-dom/client"
import App from './App'

const container = document.getElementById('abc')
let root = createRoot(container)
root.render(<App tab='home' />)
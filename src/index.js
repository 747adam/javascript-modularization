import "./main.css"
import { hello, monsters, date } from "./components.js"

// commonjs
const test = require('./test.js')

document.body.appendChild(hello())
document.body.appendChild(monsters())
document.body.appendChild(date())
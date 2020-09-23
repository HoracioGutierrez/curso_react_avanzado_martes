import React from 'react'
import ReactDOM from 'react-dom'
import App from "./ui/layout/App"
import { BrowserRouter } from "react-router-dom"
import "./estilos.css"

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)
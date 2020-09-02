import React from 'react'
import { connect } from "react-redux"
import {toggleForm}  from "../../api/actions"
import {bindActionCreators} from "redux"

const Main = ({login_form,toggleForm}) => 
    <main>
        <h2>Home</h2>
        <form>
            <div>
                <input type="text" placeholder="Username o Email"/>
            </div>
            <div>
                <input type="password" placeholder="Contraseña"/>
            </div>
            <button>Login</button>
            <a href="#" onClick={toggleForm}>No tengo cuenta aún</a>
        </form>
    </main>

export default connect(
    ({login_form})=>({login_form}),
    //(dispatch) => ({toggleForm})
    dispatch => ({
        toggleForm : bindActionCreators(toggleForm,dispatch)
    })
)(Main)

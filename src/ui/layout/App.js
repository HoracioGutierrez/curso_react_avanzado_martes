import React , {useState,useReducer} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {Provider} from "../../api/context"


let reducer = (estadoActual,action) => {
    switch(action.type){

    }
}

let init = {
    links : ["usuarios","tareas","acceso"],
    login_form : true,
    form : {
        useremail : "",
        username : "",
        email : "",
        password : ""
    },
    error : "",
    logged : false,
    /* toggleForm : this.toggleForm,
    handleSubmit : this.handleSubmit, 
    handleChange : this.handleChange */
}

let App = () => {

    /* 
    let [loginForm,setLoginForm] = useState(true)
    let [form,setForm] = useState({ useremail : "",username : "",email : "",password : ""})
    let [error,setError] = useState("")
    let [logged,setLogged] = useState(false) */
    
    let [estado,dispatch] = useReducer(reducer,init)

    return(
        <Provider value={{estado,dispatch}} >
            <Header/>
            {/* <Main/>  */}
            <Footer/>
        </Provider>
    )
}

/* 
class App extends React.Component {

    constructor(){
        super()
        this.state = {
            url_actual : "",
            links : ["usuarios","tareas","acceso"],
            login_form : true,
            form : {
                useremail : "",
                username : "",
                email : "",
                password : ""
            },
            error : "",
            logged : false,
            toggleForm : this.toggleForm,
            handleSubmit : this.handleSubmit, 
            handleChange : this.handleChange
        }
    }

    toggleForm = () => {
        this.setState({ login_form : !this.state.login_form })
    }
    
    handleChange = (e) => {
        this.setState({
            form : {
                ...this.state.form,
                [e.target.dataset.target] : e.target.value
            }
        })
    }

    handleSubmit = (form,login_form,e) => {
        e.preventDefault()
        if(login_form){
            fetch("/api/login",{
                method : "POST",
                headers : { "content-type" : "application/json" },
                body : JSON.stringify({ 
                    useremail : form.useremail , 
                    password : form.password 
                })
            })
            .then(res=>{
                switch(res.status){
                    case 500 : 
                        this.setState({
                            error : "Error de server",
                            logged : false
                        })
                        return;
                    case 403 : 
                        this.setState({
                            error : "Usuario o Contraseña incorrectos",
                            logged : false
                        })
                        return;
                    case 200 :
                        this.setState({
                            logged : true
                        })
                        return
                }
            })
            .catch(err=>{
                console.error(err)
                this.setState({
                    error : "Error de conexion",
                    logged : false
                })
            })
        }else{
            fetch("/api/signup",{
                method : "POST",
                headers : { "content-type" : "application/json" },
                body : JSON.stringify({ 
                    username : form.username , 
                    email : form.email,
                    password : form.password 
                })
            })
            .then(res=>{
                
            })
            .catch(err=>{
            })
        }
    }


    render(){
        return(
            <Provider value={this.state} >
                <Header/>
                <Main/> 
                <Footer/>
            </Provider>
        )
    }
}

 */
export default App

import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {Provider} from "../../api/context"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            links : ["link1","link2","link3"],
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
                /* switch(res.status){
                    case 500 : 
                        dispatch({type : "FORM_SIGNUP_ERROR",error:"Error de server"})
                        return;
                    case 400 : 
                        dispatch({type:"FORM_SIGNUP_ERROR",error:"Parametros incorrectos"})
                        return;
                    case 200 :
                        dispatch({ type : "FORM_SIGNUP_SUCCESS" })
                        return
                    default :
                        return res.json()
                } */
            })
            .catch(err=>{
                //console.error(err)
                /* dispatch({
                    type : "FORM_SIGNUP_ERROR",
                    error : "Hubo un error"
                }) */
            })
        }
    }


    render(){
        return(
            <Provider value={this.state} >
                <div>
                    <Header/>
                    <Main/> 
                    <Footer/>
                </div>
            </Provider>
        )
    }
}


export default App

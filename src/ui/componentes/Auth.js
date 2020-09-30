import React , {useContext} from 'react'
import context from "../../api/context"

let Auth = () => {

    let contexto = useContext(context)
    let [estado,dispatch] = contexto
    let {error,form,login_form,logging,success,signing} = estado 

    let handleChange = e => {
        let target = e.target.dataset.target
        let value = e.target.value
        dispatch({type:"FORM_CHANGE",target,value})
    }

    let handleSubmit = e => {
        e.preventDefault()
        if(login_form){

            dispatch({type:"LOGIN_ATTEMPT"})

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
                        dispatch({type:"LOGIN_ERROR",error:"Error de server"})
                        return;
                    case 403 : 
                        dispatch({type:"LOGIN_ERROR",error:"Usuario o Contraseña incorrectos"})
                        return;
                    case 200 :
                        localStorage.setItem("logged","true")
                        localStorage.setItem("usuario",form.useremail)
                        dispatch({type:"LOGIN_SUCCESS"})
                        return
                }
            })
            .catch(err=>{
                dispatch({type:"LOGIN_ERROR",error:"Error de conexion"})
            })
        }else{

            dispatch({type:"SIGNUP_ATTEMPT"})

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
                switch(res.status){
                    case 500 : 
                        dispatch({type:"SIGNUP_ERROR",error:"Error de server"})
                        return;
                    case 400 : 
                        dispatch({type:"SIGNUP_ERROR",error:"No se pudo crear la cuenta"})
                        return;
                    case 200 :
                        dispatch({type:"SIGNUP_SUCCESS"})
                        return
                }
            })
            .catch(err=>{
                dispatch({type:"SIGNUP_ERROR",error:"Error de conexion"})
            })
        }
    }

    let toggleForm = () => {
        dispatch({type:"FORM_TOGGLE"})
    }

    return (
    <>
        { error ? <p className="error">{error}</p> : null }
        { logging ? <p>Accediendo...</p> : null }
        { success ? <p>{success}</p> : null }
        { signing ? <p>Creando cuenta...</p> : null }

        <form onSubmit={handleSubmit}>
            {login_form
            ?<div>
                <input data-target="useremail" onChange={handleChange} type="text" placeholder="Username o Email" value={form.useremail}/>
            </div>:null}
            {login_form
            ?null
            :<>
            <div>
                <input data-target="username" onChange={handleChange} type="text" placeholder="Username" value={form.username}/>
            </div>
            <div>
                <input data-target="email" onChange={handleChange} type="email" placeholder="Email" value={form.email}/>
            </div>
            </>
            }
            <div>
                <input data-target="password" onChange={handleChange} type="password" placeholder="Contraseña" value={form.password}/>
            </div>
            <button disabled={logging || signing ?true:false}>{login_form?"Login":"Crear"}</button>
            <a href="#" onClick={toggleForm}>{login_form?"No tengo cuenta aún":"acceder a mi cuenta"}</a>
        </form>
    </>
    )
}

export default Auth
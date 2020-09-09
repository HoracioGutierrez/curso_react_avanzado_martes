export let handleSubmit = (form,login_form,e) => dispatch => {
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
                    dispatch({type : "FORM_LOGIN_ERROR",error:"Error de server"})
                    return;
                case 403 : 
                    dispatch({type:"FORM_LOGIN_ERROR",error:"Usuario o Contraseña incorrectos"})
                    return;
                case 200 :
                    dispatch({
                        type : "FORM_LOGIN_SUCCESS"
                    })
                    return
                default :
                    return res.json()
            }
        })
        .catch(err=>{
            console.error(err)
            dispatch({
                type : "FORM_LOGIN_ERROR",
                error : "Error de conexion"
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
            switch(res.status){
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
            }
        })
        .catch(err=>{
            //console.error(err)
            dispatch({
                type : "FORM_SIGNUP_ERROR",
                error : "Hubo un error"
            })
        })
    }
    

}
/*     return (dispatch) => {



    } */
    /* return {
        type : "FORM_SUBMIT"
    } */
   /*  if(login_form){
        fetch("/login")
        .then(res=>res.json())
        .then(res=>{
            
        })
        .catch(err=>{

        })
    }else{
        fetch("/signup")
    }
} */


export let handleChange = (e) => {
    return { 
        type : "FORM_CHANGE" , 
        target : e.target.dataset.target , 
        value : e.target.value 
    }
}


export let toggleForm = (e) => {
    e.preventDefault()
    return { type : "FORM_TOGGLE" }
}
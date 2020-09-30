export let init = {
    links : ["usuarios","tareas","cuenta","logout"],
    login_form : true,
    form : {
        useremail : "",
        username : "",
        email : "",
        password : ""
    },
    error : "",
    logged : false,
    logging : false,
    signing : false,
    success : ""
}

export let reducer = (estadoActual,action) => {
    console.log(action)
    switch(action.type){

        case "SIGNUP_ATTEMPT" : 
            return {
                ...estadoActual,
                signing : true
            }
        
        case "SIGNUP_SUCCESS" : 
            return {
                ...estadoActual,
                success : "Se creo la cuenta!",
                signing : false,
                login_form : true,
                form : {
                    useremail : "",
                    username : "",
                    email : "",
                    password : ""
                }
            }

        case "SIGNUP_ERROR" : 
            return {
                ...estadoActual,
                error : action.error,
                signing : false
            }

        case "LOGIN_ATTEMPT" :
            return {
                ...estadoActual,
                logging : true
            }

        case "LOGIN_ERROR" :
            return {
                ...estadoActual,
                error : action.error,
                logging : false
            }

        case "LOGIN_SUCCESS" :
            return {
                ...estadoActual,
                logged : true,
                logging : false
            }
        
        case "FORM_CHANGE" :
            return {
                ...estadoActual,
                form : {
                    ...estadoActual.form,
                    [action.target] : action.value
                }
            }

        case "FORM_TOGGLE" :
            return {
                ...estadoActual,
                login_form : !estadoActual.login_form
            }
        default :
            return { ...estadoActual }
    }
}

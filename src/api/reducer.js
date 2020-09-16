let initState = {
    links : ["link1","link2","link3"],
    login_form : true,
    form : {
        useremail : "",
        username : "",
        email : "",
        password : ""
    },
    error : "",
    logged : false
}

let reducer = (prevState=initState,action) => {
    switch(action.type){
        
        case "FORM_LOGIN_ERROR" : 
            return {
                ...prevState,
                error : action.error,
                logged : false
            }

        case "FORM_LOGIN_SUCCESS" : 
            return {
                ...prevState,
                logged : true
            }

        case "FORM_CHANGE" :
            return {
                ...prevState,
                form : {
                    ...prevState.form,
                    [action.target] : action.value
                }
            }
        case "FORM_TOGGLE" : 
            return {
                ...prevState,
                login_form : !prevState.login_form
            }
        default :
            return prevState
    }
}

export default reducer
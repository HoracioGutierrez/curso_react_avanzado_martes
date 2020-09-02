let initState = {
    links : ["link1","link2","link3"],
    login_form : true
}

let reducer = (prevState=initState,action) => {
    switch(action.type){
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
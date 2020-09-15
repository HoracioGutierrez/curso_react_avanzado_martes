import { all , takeEvery , call , put } from "redux-saga/effects"
//EFFECTS : Son palabras reservadas que podemos usar en cada saga 
//WORKER SAGA : hacen todo el trabajo de los side efects
//WATCHER SAGA : se encargan de interceptar a los actions y ejecutan workers
//ROOT SAGA : se encarga de dar inicio a todo el resto de los sagas

function *LoginSaga({form,login_form,type}){

    if(login_form){

        try {
            
            let resultado = yield call(fetch,"/api/login",{
                method : "POST",
                headers : { "content-type" : "application/json" },
                body : JSON.stringify({ 
                    useremail : form.useremail , 
                    password : form.password 
                })
            })

            switch(resultado.status){
                case 500 : 
                    yield put({type : "FORM_LOGIN_ERROR",error:"Error de server"})
                    return;
                case 403 : 
                    yield put({type:"FORM_LOGIN_ERROR",error:"Usuario o Contraseña incorrectos"})
                    return;
                case 200 :
                    yield put({type : "FORM_LOGIN_SUCCESS"})
                    return
            }

        }catch(e){
            console.log(e)
            yield put({type : "FORM_LOGIN_ERROR",error:"Error de server"})
        }

    }else{

        try {
            
            let resultado = yield call(fetch,"/api/signup",{
                method : "POST",
                headers : { "content-type" : "application/json" },
                body : JSON.stringify({ 
                    username : form.username , 
                    email : form.email,
                    password : form.password 
                })
            })

            switch(resultado.status){
                case 500 : 
                    yield put({type : "FORM_SIGNUP_ERROR",error:"Error de server"})
                    return;
                case 400 : 
                    yield put({type:"FORM_SIGNUP_ERROR",error:"Parametros incorrectos"})
                    return;
                case 200 :
                    yield put({ type : "FORM_SIGNUP_SUCCESS" })
                    return
            }

        }catch(e){
            console.log(e)
            yield put({type : "FORM_LOGIN_ERROR",error:"Error de server"})
        }
        
    }

}


/* function *SignupSaga(){} */


function *watcherLoginSaga(){
    /* HANDLE_LOGIN 
    
    yield takeEvery("HANDLE_LOGIN",LoginSaga)
    */
    yield takeEvery("LOGIN_FORM",LoginSaga)
}

/* function *watcherSignupSaga(){
    yield takeEvery("HANDLE_SIGNUP",SignupSaga)
} */


export default function *rootSaga(){
    yield all([
        watcherLoginSaga()
        /* , watcherSignupSaga() */
    ])
}
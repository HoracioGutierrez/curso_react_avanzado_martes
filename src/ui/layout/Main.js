import React , {useContext} from 'react'
import context from "../../api/context"

const Main = () => {

    let {form,login_form,error,toggleForm,handleChange,handleSubmit} = useContext(context)

    return (
    <main>
        <h2>Home</h2>
        {error? <p className="error">{error}</p> : null }
        <form onSubmit={handleSubmit.bind(null,form,login_form)}>
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
            <button>{login_form?"Login":"Crear"}</button>
            <a href="#" onClick={toggleForm}>{login_form?"No tengo cuenta aún":"acceder a mi cuenta"}</a>
        </form>
    </main>
    )
}
    

export default Main

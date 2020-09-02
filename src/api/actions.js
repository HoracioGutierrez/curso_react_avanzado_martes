let handleSubmit = () => {}

let handleChange = () => {}

export let toggleForm = (e) => {
    e.preventDefault()
    return { type : "FORM_TOGGLE" }
}
import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL


// Create Action

export const createAction = async({request}) => {
    
    //get form data
    const formData = await request.formData()

    // construct request body
    const newProduct = {
        name: formData.get("name"),
        image: formData.get("image"),
        size: formData.get("size"),
        price: formData.get("price")
    }

    // send request to our backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })

    //redirect 
    return redirect("/")
}


// Update Action
export const updateAction = async({request, params}) => {
    //get the formdata
    const formData = await request.formData()
    //get the pet id
    const id = params.id
    // construst new pet
    const updatedProduct = {
        name: formData.get("name"),
        image: formData.get("image"),
        size: formData.get("size"),
        price: formData.get("price")
    }
    // send request to backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    })
    // redirect to index page
    return redirect(`/${id}`)
}


// Delete Action

export const deleteAction = async({params}) => {
    //get the pet id
    const id = params.id
    // send request to backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect to index page
    return redirect("/")
}
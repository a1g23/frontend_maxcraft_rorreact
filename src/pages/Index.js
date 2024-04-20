import { useLoaderData } from "react-router-dom"

const ShowAll = (props) => {
    const products = useLoaderData()
    console.log(products)
    products.map(el => {
        return (
            <h1>{el.name}</h1>
        )
    })
    
}

export default ShowAll
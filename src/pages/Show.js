import { useLoaderData } from "react-router-dom"

const ShowOne = (props) => {
    const product = useLoaderData()
    return (
        
        <h1>{product.name}</h1>
    )
}

export default ShowOne
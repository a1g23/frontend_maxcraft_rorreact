import { useLoaderData } from "react-router-dom"

const ShowOne = (props) => {
    const product = useLoaderData()
    return (
        <div>
            <div className="header-container">
                
            </div>
            <h4>{product.name}</h4>
            <img src={product.image} width={300} alt="product image"></img>
            <div className="container">
                <h4>Size: {product.size} // </h4>
                <h4>Price: ${product.price}</h4>
            </div>

        </div>
        
    )
}

export default ShowOne
import { Form, Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ShowOne = (props) => {
    const product = useLoaderData()
    return (
        <div>
            <Header />
            <h1>{product.name}</h1>
            <div className="show-container">
                <img src={product.image} width={400} alt="product image"></img>
                <div className="specs-container">
                    <h4>Size: {product.size}</h4>
                    <h4>Price: ${product.price}</h4>
                </div>
            </div>
            <div className="button-container">
                <Form action={`/delete/${product.id}/`} method="POST">
                    <button>Delete</button>
                </Form>
                
                <Link to={`/${product.id}/update`}>
                    <button>Update</button>
                </Link>
            </div>
            <Footer />
        </div>
        
    )
}

export default ShowOne
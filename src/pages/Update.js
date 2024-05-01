import { Form, useLoaderData } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'

const Update = (props) => {
    const product = useLoaderData()
    console.log(product)

    return(
        <div>
            <Header />
            <h1>Update {product.name}..</h1>
            
            <Form className="create-form" action={`/update/${product.id}/`} method="POST">
                <input type="text" id="name" name="name" defaultValue={product.name}/>
                <input type="text" id="image" name="image" defaultValue={product.image}/>
                <input type="text" id="size" name="size" defaultValue={product.size}/>
                <input type="number" id="price" name="price" defaultValue={product.price}/>
                <button>Update</button>
            </Form>
            <Footer />
            
        </div>
        

    )
}


export default Update
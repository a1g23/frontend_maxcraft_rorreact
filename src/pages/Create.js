import { Form } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Create = (props) => {
    return (
        <div>
            <Header />
            <h1>add a new product..</h1>
            <Form className="create-form" action={`create`} method="POST">
                    <input type="text" id="name" name="name" placeholder="name"/>
                    <input type="text" id="image" name="image" placeholder="image"/>
                    <input type="text" id="size" name="size" placeholder="size"/>
                    <input type="number" id="price" name="price" placeholder="price"/>
                    <button>Add to Inventory</button>
            </Form>
            <Footer />

        </div>
    )
}

export default Create
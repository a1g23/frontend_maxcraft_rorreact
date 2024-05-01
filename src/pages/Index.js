import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = (props) => {
    const products = useLoaderData()
    
    return (
        <div>
            <Header />
            
                <h1>all products..</h1>
                
            
            <div className="container">
                {products.map(v => {
                    return (
                        <Link to={`${v.id}`}>
                            <div key={v._id} className="product">
                                <h4 className="product-item product-name">{v.name}</h4>
                                <img className="product-item product-name" src={v.image} width="250" ></img>
                            </div>  
                        </ Link>          
                    )
                })}
            </div>
            <Footer />
        </div>
    )
    
}

export default Index
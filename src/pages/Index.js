import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = (props) => {
    const products = useLoaderData()
    
    return (
        <div>
            <Header />
            <div className="header-container">
                <h1>all products..</h1>
                
            </div>
            <div className="container">
                {products.map(v => {
                    return (
                        <div key={v._id} className="product">
                            <Link to={`${v.id}`}>
                                <h4>{v.name}</h4>
                                <img src={v.image} width="300" ></img>
                            </Link>
                        </div>            
                    )
                })}
            </div>
            <Footer />
        </div>
    )
    
}

export default Index
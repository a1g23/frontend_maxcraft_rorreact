import { Link, useLoaderData } from "react-router-dom"

const Index = (props) => {
    const products = useLoaderData()
    
    return (
        <div>
            <div className="header-container">
                <h1>all products..</h1>
                
            </div>
            <div className="container">
                {products.map(v => {
                    return (
                        <div key={v._id} className="product">
                            
                                <h4>{v.name}</h4>
                                <img src={v.image} width="300" ></img>
                            
                        </div>            
                    )
                })}
            </div>
            
        </div>
    )
    
}

export default Index
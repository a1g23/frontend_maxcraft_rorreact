const Hamburger = () =>{
    return(
        <div className="hamburger-container">
            <div>
                <h3 className="hamburger-item"><a href="/">Home</a></h3>
                <h3 className="hamburger-item"><a href="new">Add Inventory</a></h3>
                <h3 className="hamburger-item"><a href="/">Add Client</a></h3>
                <h3 className="hamburger-item"><a href="/">Logout</a></h3>
            </div>
        </div>
    )
}

export default Hamburger
import Hamburger from "./Hamburger"
import { Link, useState } from "react"
import MaxcraftLogo from "./logomc.png"

const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const toggleMenu = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        <div>
            <a href="/">
                <div className="title-container">
                    <img src={MaxcraftLogo} width={75}></img>
                    <h1>Maxcraft Inc.</h1>
                </div>
            </a>
            
            <nav className="nav">
                {!hamburgerOpen && 
                <div className="hamburger-svg">
                    <svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" onClick={()=>{toggleMenu()}}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
                        </g>
                        {hamburgerOpen}
                    </svg>
                </div>}
                    {hamburgerOpen && <div onClick={() => {
                        setHamburgerOpen(!hamburgerOpen)
                    }}><Hamburger/></div>}
            </nav>
        </div>
    )
}

export default Header
import { Heading , Link } from "@chakra-ui/react";
import "./navbar.css"

export default function Navbar(){
    return(
        <>
         <header>
            <Heading color="red">Free Netflix Abril 23</Heading>
            <ul className="navigaition">
             <li><Link to="/movies">Movies</Link></li>
             <li><Link to="/webseries">Web Series</Link></li>
             <li><Link to="/adult">Adult</Link></li>
             <li><a href="/" target="_blank" rel="noreferrer">Contact</a></li>
            </ul>
            <form className="search">
             <input type="text" id="SearchText" placeholder="Search..."/>
            </form>
        </header>
        </>
    )
}
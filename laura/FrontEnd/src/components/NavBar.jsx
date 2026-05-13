import { NavLink} from "react-router-dom";

export default function NavBar(){
    return(
         <nav className = "navbar">
        <NavLink to ="/" end>homeome</NavLink>
         <NavLink to ="/filmes" end>Filmes</NavLink>
        
        </nav>
    )
}
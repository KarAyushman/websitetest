import "./navbar.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const navbar = () => {
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity:1}} 
            initial={{opacity:0}}
            transition={{duration:1}}
            >
            <section className="navbar-main">
                <Link to="/" className="navbar-header-name">Ayushman LP. Kar</Link>
                <div className="menu-bar">
                    <NavLink activeClassName="active-menu" to="/" className="navbar-menu-item">Home</NavLink>
                    <NavLink activeClassName="active-menu" to="/about" className="navbar-menu-item">About Me</NavLink>
                    <NavLink activeClassName="active-menu" to="/publications" className="navbar-menu-item">Publications</NavLink>
                    <NavLink activeClassName="active-menu" to="/projects" className="navbar-menu-item">Projects</NavLink>
                    <NavLink activeClassName="active-menu" to="/community" className="navbar-menu-item">Community</NavLink>
                    <NavLink activeClassName="active-menu" to="/travel" className="navbar-menu-item">Music</NavLink>
                    <NavLink activeClassName="active-menu" to="/photography" className="navbar-menu-item">Photography</NavLink>
                    <NavLink activeClassName="active-menu" to="/blog" className="navbar-menu-item">Blog</NavLink>
                    <NavLink activeClassName="active-menu" to="/contact" className="navbar-menu-item">Contact</NavLink>
                    
                </div>

            </section>
        </motion.div>
    )
}

export default navbar

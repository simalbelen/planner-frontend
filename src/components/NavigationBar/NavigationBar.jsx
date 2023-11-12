import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import "./NavigationBar.css"
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";


const NavigationBar = ({title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <NavigationDrawer isOpen={isOpen} toggleOpen={toggleOpen}/>
        <div className="navigation-bar">  
            <FiMenu className="menu-icon"  onClick={toggleOpen}/>
            <span className="title">{title}</span>
            <img className="profile-picture" src="https://randomuser.me/api/portraits/men/25.jpg" alt="Profile picture" />
        </div>
    </>
    
}

export default NavigationBar
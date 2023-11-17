import './NavigationDrawer.css'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'

const NavigationDrawer = ({ isOpen, toggleOpen }) => {

    return (
        <>
            <div
                className={`transparent-background ${isOpen ? 'active' : ''}`}
                onClick={toggleOpen}
            />
            <div className="drawer">
                <div className='drawer-content'>
                    <GrClose className="close-icon" onClick={toggleOpen} />
                    <Link className='menu-link' to="/" onClick={toggleOpen}>
                        Home
                    </Link>
                    <Link className='menu-link' to="/planner" onClick={toggleOpen}>
                        Planner
                    </Link>
                    <Link className='menu-link' to="/tasks" onClick={toggleOpen}>
                        Tasks
                    </Link>
                    <Link className='menu-link' to="/events" onClick={toggleOpen}>
                        Events
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavigationDrawer

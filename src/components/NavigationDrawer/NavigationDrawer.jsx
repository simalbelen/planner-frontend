import './NavigationDrawer.css'
import { GrClose } from 'react-icons/gr'

const NavigationDrawer = ({ toggleOpen }) => {
    return (
        <>
            <div className="transparent-background">
                <div className="drawer">
                    <GrClose onClick={toggleOpen} />
                    <a href="#" className="link">
                        Item 1
                    </a>
                    <a href="#" className="link">
                        Item 2
                    </a>
                    <a href="#" className="link">
                        Item 3
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavigationDrawer

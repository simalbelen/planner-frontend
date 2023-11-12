
import { useState } from 'react';
import ButtonBar from '../../components/ButtonBar/ButtonBar'
import Planner from "../../components/Planner/Planner"
import "./Home.css"
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Home = () => {
    const [planner, setPlanner] = useState(1) // 0 -> daily, 1 -> weekly, 2 -> monthly, 3 -> yearly
    return (
        <>
            <NavigationBar title={"Home"}/>
            <div className="header">
                <ButtonBar setPlanner={setPlanner} />
            </div>
            <div className="body">
                <Planner planner={planner} />
            </div>
        </>
    )
}

export default Home

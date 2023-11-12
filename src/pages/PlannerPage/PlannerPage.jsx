
import { useState } from 'react';
import ButtonBar from '../../components/ButtonBar/ButtonBar'
import Planner from "../../components/Planner/Planner"
import "./PlannerPage.css"
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const PlannerPage = () => {
    const [planner, setPlanner] = useState(1) // 0 -> daily, 1 -> weekly, 2 -> monthly, 3 -> yearly
    return (
        <>
            <NavigationBar title={"Planner"}/>
            <div className="header">
                <ButtonBar setPlanner={setPlanner} />
            </div>
            <div className="body">
                <Planner planner={planner} />
            </div>
        </>
    )
}

export default PlannerPage

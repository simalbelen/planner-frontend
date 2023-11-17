
import { useState } from 'react';
import PlannerFiltersBar from '../../components/PlannerFiltersBar/PlannerFiltersBar'
import Planner from "../../components/Planner/Planner"
import "./PlannerPage.css"

const PlannerPage = () => {
    const [planner, setPlanner] = useState(0) // 0 -> daily, 1 -> weekly, 2 -> monthly, 3 -> yearly
    return (
        <>
            <div className="header">
                <PlannerFiltersBar setPlanner={setPlanner} />
            </div>
            <div className="body">
                <Planner planner={planner} />
            </div>
        </>
    )
}

export default PlannerPage

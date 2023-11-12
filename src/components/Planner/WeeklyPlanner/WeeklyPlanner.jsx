import "./WeeklyPlanner.css"
import WeekDayPlan from "./WeekDayPlan/WeekDayPlan"

const WeeklyPlanner = () => {

    return <div className="planner">
        <WeekDayPlan weekDay={"Monday"}/>
        <WeekDayPlan weekDay={"Tuesday"}/>
        <WeekDayPlan weekDay={"Wednesday"}/>
        <WeekDayPlan weekDay={"Thursday"}/>
        <WeekDayPlan weekDay={"Friday"}/>
        <WeekDayPlan weekDay={"Saturday"}/>
        <WeekDayPlan weekDay={"Sunday"}/>
    </div>
}

export default WeeklyPlanner